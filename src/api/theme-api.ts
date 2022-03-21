import {Request, Response} from 'express';
import {ThemeService} from "server-db/services/ThemeService";

export class ThemeAPI {
  public static addUserTheme = async (req: Request, res: Response) => {
    const {body} = req

    try {
      await ThemeService.create(body)
      res.json({success: 'User theme saved'})
    } catch(e) {
      res.status(400)
      res.json({error: 'Unable to add user theme'})
    }
  }

  public static update = async (req: Request, res: Response) => {
    const {body} = req

    try {
      await ThemeService.update(body)
      res.json({success: 'User theme updated'})
    } catch {
      res.status(400)
      res.json({error: 'Unable to update user theme'})
    }
  }

  public static getAll = async (req: Request, res: Response) => {
    try {
      const foundThemes = await ThemeService.findAll()
      const themes = foundThemes.map(({ theme }) => theme)

      res.json({themes})
    } catch {
      res.status(400)
      res.json({error: 'Something went wrong'})
    }
  }

  public static get = async (req: Request, res: Response) => {
    try {
      const foundTheme = await ThemeService.find({ownerId: 177906})

      res.json({themes: []})
    } catch(e) {
      console.error(e.message)
      res.status(400)
      res.json({error: e.message})
    }
  }
}
