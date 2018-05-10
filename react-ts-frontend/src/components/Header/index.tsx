import * as React from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Dispatch, RootStateType } from '../../constants/types';
import LoadingSpinner from '../../components/LoadingSpinner';
import { Navbar, Nav, NavItem } from 'react-bootstrap'; {/*, NavItem, NavDropdown, MenuItem,*/}
import './styles.css';

interface Props {
    loading: boolean;
}
interface DispatchProps {
}

const mapStateToProps = (state: RootStateType, ownProps: {}): Props => {
    return {
        loading: state.app.loading
    };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
    return {

    };
};

export class Header extends React.Component<Props & DispatchProps> {

    componentDidMount() {
      //  this.props.fetchInfo();

    }

    render() {

        return (
        <div>
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <LoadingSpinner visible={this.props.loading} />
                        <a href="/">Test Task</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav className="pull-right">

                         <NavItem eventKey={1} href="#"></NavItem>
                        {/*<NavItem eventKey={2} href="#">About</NavItem>
                        <NavDropdown eventKey={3} title="Portfolio" id="basic-nav-dropdown" className="pull-right">
                            <MenuItem eventKey={3.1}>Main</MenuItem>
                            <MenuItem className="divider" />
                            <MenuItem eventKey={3.2}>Photography</MenuItem>
                            <MenuItem eventKey={3.3}>Graphic Design</MenuItem>
                            <MenuItem eventKey={3.4}>Motion Graphics</MenuItem>
                        </NavDropdown>*/}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
        );
    }
}

export default connect<Props, DispatchProps, {}>(mapStateToProps, mapDispatchToProps)(Header);