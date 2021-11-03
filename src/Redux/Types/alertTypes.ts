

export enum AlertTypes {
    ALERT_TYPE = 'ALERT_TYPE',

}


interface IAlertToggle {
    type:AlertTypes.ALERT_TYPE,
    payload:{type:'danger'|'warning'|'success',text:string,active:boolean};
}


export type ALertAction = IAlertToggle;