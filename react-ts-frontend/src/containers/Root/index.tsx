import * as React from 'react';
import { connect } from 'react-redux';
const DatePicker = require('react-bootstrap-date-picker');
import * as moment from 'moment';
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
// DatePicker = require("react-bootstrap-date-picker");

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
        this.getIncometax = this.getIncometax.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }
    componentDidMount() {
      // code
        this.props.fetchAllUsersInfo();
    }

    handleSubmit( e: any ) {
        e.preventDefault();
       // console.log(this.state);
        this.props.saveUserInfo(this.state);
        this.props.fetchAllUsersInfo();

    }

    onChange( e: any ) {
        this.setState({[e.target.name]: e.target.value});
    }

    getUserTable (users: any) {
        let NewUser: any = [];

        users.map((item : any, index: number) => {

            NewUser.push( { 'income_tax': this.getIncometax(item.annualSalary), 'annualSalary': item.annualSalary,
                'firstName': item.firstName, 'lastName': item.lastName,
                'superRate': item.superRate, 'paymentStartDate': item.paymentStartDate } );
        });
        return NewUser;
    }

    getIncometax (salary: number) {
        let a: number = 0;
       // 18,200, 18,201 – $37,000, 37,001 – $87,000, 87,001 – $180,000, 180,001 and over
        if ( salary <= 18200 ) {
           a = 0 ;
        }
        if ( salary > 18200 && salary <= 37000 ) {
            a = ( salary - 18200 ) * 19;
        }

        if ( salary > 37000 && salary <= 87000 ) {
            a = ( salary - 37000 ) * 32.5;
        }

        if ( salary > 87000 && salary <= 180000 ) {
            a = ( salary - 87000 ) * 37 ;
        }

        if ( salary > 180000 ) {
            a = ( salary - 180000 ) * 45 ;
        }

        return a;

    }
    handleChange(value: any) {
        this.setState({
            paymentStartDate: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"

        });
    }

    render() {
        const { allUsersInfo } = this.props;
        let Users: any = [];
        if (typeof allUsersInfo.length !== 'undefined') {
             Users = this.getUserTable(allUsersInfo);
        }

        return (
            <div>

                <div className="container">
                <form onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <label >First Name:</label>
                        <input type="text" name="firstName"  value={this.state.firstName} className="form-control" onChange={this.onChange}  required/>
                    </div>
                    <div className="form-group">
                        <label >Last Name:</label>
                        <input type="text" name="lastName"  value={this.state.lastName} className="form-control" onChange={this.onChange}  required/>
                    </div>

                    <div className="form-group">
                        <label >Annual Salary:</label>
                        <input type="text" name="annualSalary"  value={this.state.annualSalary} className="form-control" onChange={this.onChange}  required/>
                    </div>

                    <div className="form-group">
                        <label >Super Rate:</label>
                        <input type="number" name="superRate"  value={this.state.superRate} className="form-control" onChange={this.onChange}  required/>
                    </div>

                    <div className="form-group">
                        <label >Payment Start Date:</label>
                        <DatePicker name="paymentStartDate" id="example-datepicker" value={this.state.paymentStartDate} onChange={this.handleChange} />
                        </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
            <h2>Bordered Table</h2>
        <p>The .table-bordered class adds borders to a table:</p>
        <table className="table table-bordered">
            <thead>
            <tr>
            <th>name</th>
            <th>pay-period</th>
            <th>gross-income</th>
            <th>income-tax</th>
            <th>net-income</th>
            <th>super-amount</th>
    </tr>
    </thead>
        <tbody>
        {Users.map((item: any, index: number) => (

            <tr key={index}>
                <td>{item.firstName + ' ' + item.lastName}</td>
                <td>{moment(item.paymentStartDate).format('MM/DD/YYYY')}</td>
                <td>{item.annualSalary / 12}</td>
                <td>{item.income_tax}</td>
                <td>{(item.annualSalary / 12) - item.income_tax}</td>
                <td>{(item.annualSalary / 12) * item.superRate}</td>
            </tr>
        ))
        }

        </tbody>
    </table>
    </div>
            </div>
        );
    }

}

export default wrapped(connect<Props, DispatchProps, {}>(mapStateToProps, mapDispatchToProps)(Root));
