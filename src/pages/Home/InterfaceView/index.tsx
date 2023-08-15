import { Tabs } from 'antd'
import type { TabsProps } from 'antd'
import DetailsInterface from '../DetailsInterface'
import RunInterface from '../RunInterface'
import NewInterface from '../NewInterface'

const items: TabsProps['items'] = [
	{
		key: '1',
		label: `文档`,
		// 打开接收参数接口
		// 1. 更改下面组件为<DetailsInterface props={接收参数} />
		// 2. 更改../DetailsInterface/index.tsx内容
		children: <DetailsInterface />
	},
	{
		key: '2',
		label: `修改文档`,
		children: <NewInterface/>
	},
	{
		key: '3',
		label: `运行`,
		children: <RunInterface />
	},
	{
		key: '4',
		label: `高级 Mock`,
		children: `Content of Tab Pane 4`
	}
]
const InterfaceView: React.FC = () => {
	return (
		// 接口详情信息展示
		<Tabs defaultActiveKey="1" items={items} />
	)
}

export default InterfaceView
