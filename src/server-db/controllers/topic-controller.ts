import {Request, Response} from 'express'
import {topicService as TopicService} from '../services/TopicService'

export class TopicAPI {
  public static create = async (req: Request, res: Response) => {
    const {body} = req

    try {
      const topic = await TopicService.create((body))
      res.json({message: 'Topic created', topic})
    } catch (e) {
      res.status(400)
      res.json({error: e.message})
    }
  }

  public static update = async (req: Request, res: Response) => {
    const {body} = req

    try {
      await TopicService.update(body)
      res.json({message: 'Topic updated'})
    } catch (e) {
      res.status(400)
      res.json({error: e.message})
    }
  }

  public static get = async (req: Request, res: Response) => {
    const {query} = req
    const {id} = query
    let response
    try {
      if (id) {
        const [results] = await TopicService.request(Number(id))
        response = results[0]
      } else {
        const [results] = await TopicService.findAll()
        response = results
      }

      res.json(response)
    } catch(e) {
      res.status(404)
      res.json({error: e.message})
    }
  }
}
