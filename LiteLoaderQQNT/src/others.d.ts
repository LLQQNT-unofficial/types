type Platforms = 'darwin' | 'linux' | 'win32';

/** @see {@link https://im.qq.com/linuxqq/support.html} */
type LinuxArchs = 'x64' | 'arm64' | 'loongarch64' | 'mips64el';

type WindowsArchs = 'x64' | 'x86' | 'arm64';

type MacOsArchs = 'x64' | 'arm64';

type Archs = LinuxArchs | WindowsArchs | MacOsArchs;

export type { Platforms, Archs }
