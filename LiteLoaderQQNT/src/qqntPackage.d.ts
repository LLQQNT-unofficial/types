import { Platforms, Archs } from './others';

type QQNTPackage = {
	name: string,
	version: string,
	private: boolean,
	description: string,
	productName: string,
	author: {
		name: string,
		email: string
	},
	homepage: string,
	sideEffects: boolean,
	bin: {
		qd: string
	},
	main: string,
	buildVersion: string,
	isPureShell: boolean,
	isByteCodeShell: boolean,
	platform: Platforms,
	eleArch: Archs
}

export type { QQNTPackage }
