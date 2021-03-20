import { Database } from '@vuex-orm/core'
import Bibliotheque from '../models/metiers/Bibliotheque'
import Livre from '../models/metiers/Livre'
import Profile from '../models/metiers/Profile'
import Projects from '../models/metiers/Projects'
import Tasks from '../models/metiers/Tasks'

const database = new Database()

database.register(Bibliotheque)
database.register(Livre)
database.register(Profile)
database.register(Projects)
database.register(Tasks)

export default database
