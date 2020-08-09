import * as Router from '@koa/router'

export default abstract class RouterCore {
    abstract initRoute(): Router
}
