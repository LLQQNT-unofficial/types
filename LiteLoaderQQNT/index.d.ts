import LLPackage from './src/llPackage';
import { QQNTPackage } from './src/qqntPackage';
import { Platforms } from './src/others';
import PluginManifest from './src/pluginManifest';

/** @type 路径, 没什么好说的 */
type Paths = {
	root: string;
	profile: string;
	data: string;
	plugins: string;
}

/** @type 版本号, 没什么好说的 */
type Versions = {
	qqnt: string;
	liteloader: string;
	node: string;
	chrome: string;
	electron: string;
}

type Plugin = {
	/** @prop 是否为内置插件(仅uno版本可用) */
	builtin?: true,
	/** @prop 插件清单文件内容 */
    manifest: PluginManifest,
	/** @prop 不兼容标志 */
    incompatible: boolean,
	/** @prop 禁用标志 */
    disabled: boolean,
	/** @prop 路径信息, 没什么好说的 */
    path: {
        plugin: string,
        data: string,
        injects: {
            main: string | null,
            preload: string | null,
            renderer: string | null
        }
    }
}

interface LiteLoader {
	path: Paths;
	versions: Versions;
	os: {
		platform: Platforms;
	};
	/** @prop package.json内容 */
	package: {
		liteloader: LLPackage;
		qqnt: QQNTPackage;
	};
	/** @prop 插件列表 */
	plugins: {
		[slug: string]: Plugin;
	};
	api: {
		/** @prop 配置文件 */
		config: {
			set: (slug: string, new_config: unknown) => void,
			get: (slug: string, default_config: unknown) => unknown
		},
		/** @prop 插件管理 */
		plugin: {
			install: (plugin_path: string, undone?: boolean) => boolean,
			delete: (slug: string, delete_data?: boolean, undone?: boolean) => true | undefined,
			disable: (slug: string, undone?: boolean) => void
		},
		/** @prop 打开外部 URL */
		openExternal: (url: string) => void,
		/** @prop 打开文件/文件夹 */
		openPath: (path: string) => void
	}
}

declare global {
	const LiteLoader: LiteLoader;
}
