import fastify, { type FastifyReply, type FastifyRequest } from 'fastify'
import { fetchData } from './lib/fetchData.tsx'
import { parseData } from './lib/parseData.ts'
import { filterData } from './lib/filterData.ts'
import type { ApiFilters } from '../common/types.ts'

const server = fastify({ logger: true })

server.get('/api/data', async function handler (req: FastifyRequest, reply: FastifyReply) {
	const data = await fetchData()
	const parsedData = parseData(data)
	const filteredData = filterData(parsedData, req.query as ApiFilters)

	reply.send(filteredData)
})

try {
	await server.listen({ port: 3000 })
} catch (err) {
	server.log.error(err)
	process.exit(1)
}

