import {connect} from "react-redux";
import TimetableNameInput from "../timetable_name_input.jsx";
import {MAX_TIMETABLE_NAME_LENGTH} from "../../constants/constants.jsx";
import {saveTimetable} from "../../actions/user_actions.jsx";
import * as ActionTypes from "../../constants/actionTypes.jsx";


const mapStateToProps = (state) => {
    let savingTimetable = state.savingTimetable;
    return {
        activeLoadedTimetableName: savingTimetable.activeTimetable.name, // the name of the user's "being-edited" saved timetable
        saving: savingTimetable.saving,
        upToDate: savingTimetable.upToDate,
        isLoggedIn: state.userInfo.data.isLoggedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeTimetableName: (name) => {
            if (name.length === 0 || name.length > MAX_TIMETABLE_NAME_LENGTH) {
                return;
            }
            dispatch({
                type: ActionTypes.CHANGE_ACTIVE_SAVED_TIMETABLE_NAME,
                name,
            })
            dispatch(saveTimetable());
        },
        openSignupModal: () => dispatch({type: ActionTypes.TOGGLE_SIGNUP_MODAL})
    }
}

const TimetableNameInputContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TimetableNameInput);

export default TimetableNameInputContainer;
