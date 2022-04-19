import React from 'react';

declare module 'react' {
	export type FC<P = Record<string, never>> = React.FunctionComponent<P>;
	export interface FunctionComponent<P = Record<string, never>> {
		(props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
		propTypes?: WeakValidationMap<P> | undefined;
		contextTypes?: ValidationMap<any> | undefined;
		defaultProps?: Partial<P> | undefined;
		displayName?: string | undefined;
	}
}
