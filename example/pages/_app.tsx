import React from 'react';
import { AppProps } from 'next/app';

import { Refine } from "@refinedev/core";
import { notificationProvider, LoginPage, Layout, ErrorComponent } from "@refinedev/antd";
import { dataProvider } from '@okam/refine-directus';
import routerProvider from "@refinedev/nextjs-router/legacy";
import "@refinedev/antd/dist/reset.css";

import "@styles/global.css";

import authProvider from 'src/authProvider';
import { directusClient } from 'src/directusClient';

import { PostList, PostCreate, PostEdit, PostShow } from '@components';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
        <Refine
			legacyRouterProvider={routerProvider}
			legacyAuthProvider={authProvider}
			dataProvider={dataProvider(directusClient)}
			resources={[
				{
					name: 'posts',					
					list: PostList,
					create: PostCreate,
					edit: PostEdit,
					show: PostShow
				}
			]}
			warnWhenUnsavedChanges={true}
			notificationProvider={notificationProvider}
			LoginPage={LoginPage}
			Layout={Layout}
			catchAll={<ErrorComponent />}
		>
			<Component {...pageProps} />
		</Refine>
    );
}

export default MyApp;
