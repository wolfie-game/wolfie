import BaseRESTService from './BaseRESTServise'
import {
  Topic,
  TopicCreateAttributes,
  TopicUpdateAttributes,
} from '../models/topic'
import {db} from '../sequelize'

class TopicService implements BaseRESTService {
  public find = (id: number) => {
    return Topic.findOne({
      where: {
        id: id,
      },
    })
  }

  public request = async (id: number) => {
    return db.query(
      `
          SELECT t.ID, t.TITLE, t.CONTENT, u.LOGIN, u.AVATAR, COUNT(m.ID) AS COMMENTS_COUNT
          FROM RPS_TOPIC t
                LEFT JOIN RPS_USER u ON u.ID = t.AUTHOR_ID
                LEFT JOIN RPS_COMMENT m ON m.TOPIC_ID = t.ID
          WHERE t.ID = ?
          GROUP BY t.ID, t.TITLE, t.CONTENT, u.LOGIN, u.AVATAR
          ORDER BY t.created_at
        `,
      {replacements: [id]},
    )
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
    return db.query(`
          SELECT t.ID, t.TITLE, t.CONTENT, u.LOGIN, u.AVATAR, COUNT(m.ID) AS COMMENTS_COUNT
          FROM RPS_TOPIC t
                LEFT JOIN RPS_USER u ON u.ID = t.AUTHOR_ID
                LEFT JOIN RPS_COMMENT m ON m.TOPIC_ID = t.ID
          GROUP BY t.ID, t.TITLE, t.CONTENT, u.LOGIN, u.AVATAR
          ORDER BY t.created_at
        `)
  }
}

export const topicService = new TopicService()
