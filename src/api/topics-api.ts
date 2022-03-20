import {sequelize} from '../server-db/sequelize'
import {
  Topic,
  TopicCreateAttributes,
  TopicUpdateAttributes,
} from '../server-db/models/topic'

export default class TopicsAPI {
  getAllTopics() {
  /*  return sequelize.query(`
    SELECT t.ID, t.TITLE, t.CONTENT, u.LOGIN, u.AVATAR, COUNT(m.ID) AS COMMENTS_COUNT
    FROM RPS_TOPIC t
          LEFT JOIN RPS_USER u ON u.ID = t.AUTHOR_ID
          LEFT JOIN RPS_COMMENT m ON m.TOPIC_ID = t.ID
    GROUP BY t.ID, t.TITLE, t.CONTENT, u.LOGIN, u.AVATAR
    ORDER BY t.created_at
  `)*/
  }

  getTopic(id) {
    return sequelize.query(
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
  find = (id: number) => {
    return Topic.findOne({
      where: {
        id: id,
      },
    })
  }
  async postTopic(data) {
    const record = await this.find(data.id)
    if (record === null) {
      throw new Error('Topic not found')
    }
    record.set(data)

    return record.save()
  }
}
