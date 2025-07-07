type LLPackage = {
	name: string;
	version: string;
	description: string;
	main: string;
	private: boolean;
	license: string;
	author: {
		name: string;
		url: string;
	};
	homepage: string;
	bugs: string;
	repository: {
		type: string;
		url: string;
	};
}

export default LLPackage;
