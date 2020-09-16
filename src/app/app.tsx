import * as React from 'react';
import logo from '../assets/logo.svg';
import styles from './app.scss';

export interface AppProps {
    compiler: string;
    framework: string;
    stylePreProcessor: string;
}

export class App extends React.Component<AppProps> {
    render(): JSX.Element {
        return (
            <div className={styles.container}>
                <img src={logo} alt="React logo" />
                <h1>
                    Welcome to {this.props.framework} boilerplate with {this.props.compiler} and{' '}
                    {this.props.stylePreProcessor}
                </h1>
            </div>
        );
    }
}
