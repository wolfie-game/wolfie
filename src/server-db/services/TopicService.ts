import BaseRESTService from './BaseRESTServise'
import {
  Topic,
  TopicCreateAttributes,
  TopicUpdateAttributes,
} from '../models/topic'
import {sequelize} from '../sequelize'

export type NewTopic = {
  authorId: number;
  content: string;
  title: string;
}

class TopicService implements BaseRESTService {
  public find = (id: number) => {
    return Topic.findOne({
      where: {
        id: id
      },
    })
  }

  public request = async (id: number) => {
    return sequelize.query(`
      SELECT t.ID, t.TITLE, t.CONTENT, u.LOGIN, u.AVATAR, COUNT(m.ID) AS COMMENTS_COUNT
      FROM TOPIC t
            LEFT JOIN USER u ON u.ID = t.AUTHOR_ID
            LEFT JOIN COMMENT m ON m.TOPIC_ID = t.ID
      WHERE t.ID = ?
      GROUP BY t.ID, t.TITLE, t.CONTENT, u.LOGIN, u.AVATAR
      ORDER BY t.created_at
    `, { replacements: [id] })
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
    return sequelize.query(`
      SELECT t.ID, t.TITLE, t.CONTENT, u.LOGIN, COUNT(m.ID) AS COMMENTS_COUNT
      FROM TOPIC t
            LEFT JOIN USER u ON u.ID = t.AUTHOR_ID
            LEFT JOIN COMMENT m ON m.TOPIC_ID = t.ID
      GROUP BY t.ID, t.TITLE, t.CONTENT, u.LOGIN
      ORDER BY t.created_at
    `)
  }
}

export const topicService = new TopicService()
