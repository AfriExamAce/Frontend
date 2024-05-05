import { Toast } from "primereact/toast";
import { RefObject } from "react";

export const showSuccess = (toast: RefObject<Toast>, message: string) => {
	toast.current?.show({
		severity: "success",
		summary: "Success",
		detail: message,
		life: 3000,
	});
};
