import { Editor } from "@tinymce/tinymce-react";

const UseEditor = ({ initialValue = "" }) => {
	return (
		<Editor
			apiKey="fxt6mb80cqh4tigyi9jaglbzes06rz3yb6ly0ue3l4gy5e8f"
			init={{
				plugins:
					"anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
				toolbar:
					"undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
			}}
			initialValue={initialValue}
		/>
	);
};

export default UseEditor;
