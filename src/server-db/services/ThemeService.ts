import {BaseRESTService} from './BaseRESTServise'
import {UserTheme} from '../models/UserTheme'

const DEFAULT_THEME_NAME = 'dark'

interface UpdateRequestInt {
  ownerId: number;
  theme: string;
}

interface CreateRequestInt {
  ownerId: number;
  theme: string;
}

class ThemeService implements BaseRESTService {
  public find = (ownerId: number) => {
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
    const foundRecord = await this.find(ownerId)

    if (foundRecord === null) {
      return UserTheme.build({ownerId: ownerId, theme: DEFAULT_THEME_NAME})
    } else {
      return foundRecord
    }
  }

  public create = async (data: CreateRequestInt) => {
    return UserTheme.create(data)
  }
}

export const themeService = new ThemeService()
