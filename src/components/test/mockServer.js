import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'

// // const server = setupServer(
// //     http.post(import.meta.env.VITE_API_URL, (req, res, ctx) => {
// //         // Mock the API response here
// //         return HttpResponse.json([{ data: { tiny_url: 'url' } }])
// //     })
// // )

// // export { server }

// import { rest } from 'msw'

// export const handlers = [
//     http.post('https://api.tinyurl.com/create', (req, res, ctx) => {
//         const { url } = req.body
//         // Mock the response data
//         const data = { tiny_url: 'https://mocked-url.com' }
//         return HttpResponse(ctx.json(data))
//     }),
// ]
export const handlers = setupServer(
    http.post('https://api.tinyurl.com/create', () => {
        return HttpResponse.json({ tiny_url: 'https://tinyurl.com/4usn624e' })
    })
)
