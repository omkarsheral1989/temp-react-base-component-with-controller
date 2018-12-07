import BaseComponent from './base-component';

export default class BaseController<IProps, IState,
  Component extends BaseComponent<IProps, IState, BaseController<IProps, IState, Component>>> {

  protected readonly component: Component;

  public constructor(component: Component) {
    this.component = component;
    component.state = this.getInitialState();
  }

  // noinspection JSMethodCanBeStatic
  public getInitialState(): IState {
    throw new Error('Override getInitialState()');
  }

  protected get state(): Readonly<IState> {
    return this.component.state;
  }

  protected setState<K extends keyof IState>(
    state: ((Pick<IState, K> | IState | null)) | (Pick<IState, K> | IState | null)) {
    this.component.setState(state);
  }

  protected get props(): Readonly<IProps> {
    return this.component.props;
  }

  public componentWillMount() {
  }

  public componentDidMount() {
  }


  public componentWillReceiveProps(nextProps: Readonly<IProps>) {
  }

  // noinspection JSMethodCanBeStatic
  public shouldComponentUpdate(nextProps: Readonly<IProps>, nextState: Readonly<IState>) {
    return true;
  }

  public componentWillUpdate(nextProps: Readonly<IProps>, nextState: Readonly<IState>) {
  }

  public componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>) {
  }

  public componentWillUnmount() {
  }
}
