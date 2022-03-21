import {BaseRESTService} from './BaseRESTServise'
import {UserTheme} from '../models/UserTheme'
import {AppTheme} from '../models/AppTheme'

interface FindRequestInt {
  id?: number;
  ownerId?: number;
}

interface UpdateRequestInt {
  ownerId: number;
  theme: string;
}

interface CreateRequestInt {
  ownerId: number;
  theme: string;
}

class ThemeService implements BaseRESTService {
  public find = ({ownerId}: FindRequestInt) => {
    return UserTheme.findOne({
      where: {
        ownerId: ownerId
      },
    })
  }

  public findAll = () => {
    return AppTheme.findAll({
      attributes: ['theme']
    })
  }

  public update = async (data: UpdateRequestInt) => {
    const foundThemeId = await AppTheme.findOne({
      attributes: ['id'],
      where: {
        theme: data.theme
      }
    })

    if(foundThemeId !== null) {
      const foundCurrentTheme = await this.find({ownerId: data.ownerId})

      return foundCurrentTheme?.update({themeId: foundThemeId.id})
    }
  }

  public create = async (data: CreateRequestInt) => {
    try {
      const foundId = await AppTheme.findOne({
        attributes: ['id'],
        where: {
          theme: data.theme
        }
      })

      if (foundId !== null) {
        const themeData = {ownerId: data.ownerId, themeId: foundId.id}
        return UserTheme.create(themeData)
      } else {
        throw new Error(`There is no theme with name: ${data.theme}`)
      }
    } catch(error) {
      console.error(error)
    }
  }
}

export const themeService = new ThemeService()
