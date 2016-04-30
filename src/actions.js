export const getHostnameForSdk = (sdk) => {
  switch (sdk) {
    case 'node': return 'segment-debugger.herokuapp.com'
    case 'python': return 'segment-debugger-python-server.herokuapp.com'
    default: return 'localhost:3000'
  }
}

export const callApi = (getState, type, body) => {
  const {writeKey, sdk} = getState().form.global
  const hostName = getHostnameForSdk(sdk.value)
  // TODO: Manually constructing URL is not safe like this, but this is an 
  // internal tool. so yea... 
  const url = `http://${hostName}/api/${type}?writeKey=${writeKey.value}`
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then((res) => {
      res.json().then((json) => {
        if (res.ok) {
          resolve(json)
        } else {
          reject(json)
        }
      })
    }).catch((err) => {
      reject({_error: 'An unknown error occured'})
    })
  })
}

export const identify = (body) => (dispatch, getState) => callApi(getState, 'identify', body)
export const track = (body) => (dispatch, getState) => callApi(getState, 'track', body)
export const alias = (body) => (dispatch, getState) => callApi(getState, 'alias', body)
export const group = (body) => (dispatch, getState) => callApi(getState, 'group', body)
export const page = (body) => (dispatch, getState) => callApi(getState, 'page', body)
