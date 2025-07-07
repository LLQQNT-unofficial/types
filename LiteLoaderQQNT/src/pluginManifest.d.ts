type PluginType = 'extension' | 'theme' | 'framework';

/** @type 插件清单 */
type PluginManifest = {
	/** @prop 清单 JSON 校验文件 */
	$schema?: string,
	/** @prop 清单版本 */
	manifest_version: number,
	/** @prop 插件类型 */
	type: PluginType,
	/** @prop 名称 */
	name: string,
	/** @prop 内部标识符 */
	slug: string,
	/** @prop 描述 */
	description?: string,
	/** @prop 版本 */
	version: string,
	/** @prop 图标 */
	icon?: string | null,
	/** @prop 设置界面预览图标 */
	thumb?: string | null,
	/** @prop 作者信息 */
	authors?: {
		/** @prop 名称 */
		name: string,
		/** @prop 链接 */
		link?: string
	}[],
	/** @prop Github 仓库信息 */
	repository?: {
		/** @prop 仓库短名称(`<username>/<repo>`) */
		repo: string,
		/** @prop 仓库主分支 */
		branch: string,
		/** @prop 发布版本 */
		release?: {
			/** @prop 发布标签 */
			tag: string,
			/** @prop 发布文件 */
			file?: string
		}
	},
	/** @prop 支持的平台 */
	platform: [
		'win32'?,
		'darwin'?,
		'linux'?
	],
	/** @prop 依赖项 */
	dependencies?: string[],
	/** @prop 注入文件 */
	injects?: {
		/** @prop 渲染进程 */
		renderer?: string,
		/** @prop 主进程 */
		main?: string,
		/** @prop 预加载脚本 */
		preload?: string
	}
}

export default PluginManifest;
