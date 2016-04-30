
export const callApi = (getState, type, body) => {
  const {writeKey, sdk} = getState().form.global
  const baseUrl = `/api/${type}/${writeKey.value}`
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
}

export const identify = (body) => (dispatch, getState) => callApi(getState, 'identify', body)
export const track = (body) => (dispatch, getState) => callApi(getState, 'track', body)
export const alias = (body) => (dispatch, getState) => callApi(getState, 'alias', body)
export const group = (body) => (dispatch, getState) => callApi(getState, 'group', body)
export const page = (body) => (dispatch, getState) => callApi(getState, 'page', body)
