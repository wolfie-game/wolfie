import {BaseRESTService} from './BaseRESTServise'
import {UserTheme} from '../models/UserTheme'
import {sequelize} from '../sequelize'

const DEFAULT_THEME_NAME = 'dark'

interface UpdateRequestInt {
  ownerId: number;
  theme: string;
}

interface CreateRequestInt {
  ownerId: number;
  theme: string;
}

// const UserThemeDB = sequelize.getRepository(UserTheme);

class ThemeService implements BaseRESTService {
  public find = (ownerId: number) => {
    // console.log('ThemeService find sequelize', sequelize)
    if (!UserTheme.findOne)
      return null

    return UserTheme.findOne({
      where: {
        ownerId: ownerId
      },
    })
  }

  public update = async (data: UpdateRequestInt) => {
    const foundTheme = await this.find(data.ownerId)

    if(foundTheme !== null) {
      return foundTheme.update({theme: data.theme})
    } else {
      return this.create(data)
    }
  }

  public request = async (ownerId: number) => {
    console.log('ThemeService request', ownerId)
    const foundRecord = await this.find(ownerId)
    if (foundRecord === null) {
      console.log('foundRecord null', UserTheme.build)
      return UserTheme.build({ownerId: ownerId, theme: DEFAULT_THEME_NAME})
    } else {
      console.log('foundRecord 2', foundRecord)
      return foundRecord
    }
  }

  public create = async (data: CreateRequestInt) => {
    return UserTheme.create(data)
  }
}

export const themeService = new ThemeService()
