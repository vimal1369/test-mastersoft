import * as React from 'react';
import { connect } from 'react-redux';
import {
    incrementCounter,
    saveUserInfo,
    fetchAllUsersInfo
} from '../../redux/app/actions';
import { ActionType, Dispatch, RootStateType } from '../../constants/types';
// import LoadingSpinner from '../../components/LoadingSpinner';
import { wrapped } from '../Wrapper';
import './styles.css';
import { UserInfo } from '../../constants/userInfo';

interface Props {
    counter: number;
    loading: boolean;
    userInfoAfterSubmit: Array<UserInfo>;
    allUsersInfo: Array<UserInfo>;
}

interface DispatchProps {
    incrementCounter(): ActionType<{}>;
    saveUserInfo(data: Object) : ActionType<string>;
    fetchAllUsersInfo(): ActionType<string>;
}

const mapStateToProps = (state: RootStateType, ownProps: {}): Props => {
    return {
        counter: state.app.counter,
        loading: state.app.loading,
        userInfoAfterSubmit: state.app.userInfoAfterSubmit,
        allUsersInfo: state.app.allUsersInfo
    };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
    return {
        incrementCounter: () => dispatch(incrementCounter()),
        saveUserInfo: (data: object) => dispatch(saveUserInfo(data)),
        fetchAllUsersInfo: () => dispatch(fetchAllUsersInfo())
    };
};
// tslint:disable-next-line:max-line-length
export class Root extends React.Component<Props & DispatchProps, { firstName: string,
    lastName: string, annualSalary: number, superRate: number, paymentStartDate: any }> {
    constructor(props: any) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            annualSalary: 0,
            superRate: 0,
            paymentStartDate: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

    }
    componentDidMount() {
      // code
        this.props.fetchAllUsersInfo();
    }

    handleSubmit( e: any ) {
        e.preventDefault();
       // console.log(this.state);
        this.props.saveUserInfo(this.state);
    }

    onChange( e: any ) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                        <div className="form-group">
                            <label >First Name:</label>
                            <input type="text" name="firstName"  value={this.state.firstName} className="form-control" onChange={this.onChange}  />
                        </div>
                    <div className="form-group">
                        <label >Last Name:</label>
                        <input type="text" name="lastName"  value={this.state.lastName} className="form-control" onChange={this.onChange}  />
                    </div>

                    <div className="form-group">
                        <label >Annual Salary:</label>
                        <input type="text" name="annualSalary"  value={this.state.annualSalary} className="form-control" onChange={this.onChange}  />
                    </div>

                    <div className="form-group">
                        <label >Super Rate:</label>
                        <input type="number" name="superRate"  value={this.state.superRate} className="form-control" onChange={this.onChange}  />
                    </div>

                    <div className="form-group">
                        <label >Payment Start Date:</label>
                        <input type="text" name="paymentStartDate"  value={this.state.paymentStartDate} className="form-control" onChange={this.onChange}  />
                    </div>
                        <button type="submit" className="btn btn-default">Submit</button>
                </form>

            </div>
        );
    }

}

export default wrapped(connect<Props, DispatchProps, {}>(mapStateToProps, mapDispatchToProps)(Root));
