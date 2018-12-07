import { Component } from 'react';
import BaseController from './base-controller';

export default class BaseComponent<IProps,
  IState,
  Controller extends BaseController<IProps, IState, any>> extends Component<IProps, IState> {

  protected readonly controller: Controller;

  constructor(props: any) {
    // noinspection JSCheckFunctionSignatures
    super(props);
    const viewControllerClass = this.getViewControllerClass();
    this.controller = new viewControllerClass(this);
  }

  // noinspection JSMethodCanBeStatic
  public getViewControllerClass(): new (thisRef: BaseComponent<IProps, IState, Controller>) => Controller {
    throw new Error('Override getViewControllerClass()');
  }

  public componentWillMount() {
    this.controller.componentWillMount();
  }

  public componentDidMount() {
    this.controller.componentDidMount();
  }

  public componentWillReceiveProps(nextProps: Readonly<IProps>) {
    this.controller.componentWillReceiveProps(nextProps);
  }

  public shouldComponentUpdate(nextProps: Readonly<IProps>, nextState: Readonly<IState>) {
    return this.controller.shouldComponentUpdate(nextProps, nextState);
  }

  public componentWillUpdate(nextProps: Readonly<IProps>, nextState: Readonly<IState>) {
    this.controller.componentWillUpdate(nextProps, nextState);
  }

  public componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>) {
    this.controller.componentDidUpdate(prevProps, prevState);
  }

  public componentWillUnmount() {
    this.controller.componentWillUnmount();
  }
}
