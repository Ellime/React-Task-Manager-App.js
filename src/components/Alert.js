import React from "react";
import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogFooterButton
} from "@cdk-uip/react-dialog";
import { FormattedMessage } from "react-intl";

const Alert = ({ open, onClose, message }) => (
  <Dialog open={open} onCancel={onClose}>
    <DialogBody>{message}</DialogBody>
    <DialogFooter>
      <DialogFooterButton onClick={onClose}>
        <FormattedMessage id="Alert.ok" defaultMessage="OK" />
      </DialogFooterButton>
    </DialogFooter>
  </Dialog>
);

export default Alert;
