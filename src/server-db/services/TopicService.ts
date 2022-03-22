import BaseRESTService from './BaseRESTServise'
import {
  Topic,
  TopicCreateAttributes,
  TopicUpdateAttributes,
} from '../models/topic'

class TopicService implements BaseRESTService {
  public find = (id: number) => {
    return Topic.findOne({
      where: {
        id: id,
      },
    })
  }

  public request = async (id: number) => {
    return ''
  }

  public create = (data: TopicCreateAttributes) => {
    return Topic.create(data)
  }

  public update = async (data: TopicUpdateAttributes) => {
    const record = await this.find(data.id)

    if (record === null) {
      throw new Error('Topic not found')
    }
    record.set(data)

    return record.save()
  }

  public findAll = () => {
    return ''
  }
}

export default new TopicService()
