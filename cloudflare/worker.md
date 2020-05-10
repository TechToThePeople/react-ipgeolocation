You can "implement" the geo lookup using cloudflare workers

1. create a new worker with the script

```javascript
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const init = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'content-type': 'application/json;charset=UTF-8',
    }
  };
  return new Response(JSON.stringify({country:request.headers.get('cf-ipcountry')}), init)
}
```

2. add a route with a subdomain

3. use this url on the react component
