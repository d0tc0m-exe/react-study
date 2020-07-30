import Dialogs from "./Dialogs";
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../redux/reducers/dialogsReducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());  
        },
        updateNewMessageText: (body) => {
            dispatch(updateNewMessageTextActionCreator(body));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;