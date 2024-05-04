import { Toast } from "primereact/toast";
import { RefObject } from "react";

export const showSuccess = (toast: RefObject<Toast>) => {
	toast.current?.show({
		severity: "success",
		summary: "Success",
		detail: "Successfully logged in!",
		life: 3000,
	});
};
