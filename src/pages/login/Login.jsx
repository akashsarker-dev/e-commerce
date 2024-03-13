import React from "react";
import Pagetitle from "../../components/utils/Pagetitle";
import Breadcrumbs from "../../components/utils/Breadcrumbs";
import Formtitle from "../../components/utils/Formtitle";

export default function Login() {
  return (
    <div className=" max-w-container mx-auto">
      <Pagetitle></Pagetitle>
      <Breadcrumbs></Breadcrumbs>
      <Formtitle title="Returning Customer" />
    </div>
  );
}
