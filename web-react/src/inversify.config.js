import 'reflect-metadata'
import { Container } from 'inversify'
import { OptionListService } from './services/OptionListService'

const container = new Container()
container.bind(OptionListService).toSelf().inSingletonScope();

export { container }
