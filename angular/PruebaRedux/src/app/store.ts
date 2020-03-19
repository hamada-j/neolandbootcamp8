import { CAMBIA_MENSAJE, INCREMENTA_CONTADOR, DECREMENTA_CONTADOR, CAMBIA_DATOS_PERSONALES } from './actions';
import { tassign } from 'tassign';

export interface IAppState {
    mensaje: string;
    contador: number;
    datosPersonales: {
        nombre: string,
        apellidos: string,
        edad: number
    }
}

export const INITIAL_STATE: IAppState = {
    mensaje: "",
    contador: 0,
    datosPersonales: {
        nombre: "",
        apellidos: "",
        edad: 0
    }
}

export function rootReducer(state: IAppState, action: any): IAppState {
    console.log(action);
    switch (action.type) {
        case CAMBIA_MENSAJE: {
            return tassign(state, { mensaje: action.msg });
            // return { mensaje: action.msg, contador: state.contador };
        }
        case INCREMENTA_CONTADOR: {
            return tassign(state, { contador: state.contador + 1 });
            // return { mensaje: state.mensaje, contador: state.contador + 1 };
        }
        case DECREMENTA_CONTADOR: {
            // return { ...state, contador: state.contador - 1 }
            return tassign(state, { contador: state.contador - 1 })
            // return { mensaje: state.mensaje, contador: state.contador - 1 }
        }
        case CAMBIA_DATOS_PERSONALES: {
            return tassign(state, { datosPersonales: action.data });
        }
    }
    return state;
}