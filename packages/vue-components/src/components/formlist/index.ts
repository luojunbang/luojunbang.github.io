import Formlist from './formlist.vue'
// import 'element-plus/dist/index.css'
import { withInstall } from '../../utils'

export const LoFormList = withInstall(Formlist)

export default LoFormList

export * from './formlist'

export type LoFormInstance = InstanceType<typeof Formlist>
