import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { routerLinks } from "utils";
import popup_confirm_email from "assets/images/popup-confirm-email.png";
import "./index.less";
import { t } from "i18next";
// import { t } from "i18next";

const Component = {
  success: (message) => import('sweetalert2').then(({default: Swal}) => Swal.fire({
    icon: "success",
    title: t("components.message.Success"),
    text: message,
    showConfirmButton: false,
    timer: 1500,
  })),
  warning: (message) => import('sweetalert2').then(({default: Swal}) => Swal.fire({
    icon: "warning",
    title: message,
    padding: 0,
  })),
  error: (message) => {
    return import('sweetalert2').then(({default: Swal}) => Swal.fire({
      icon: "error",
      title: t("components.message.Fail"),
      text: message,
      padding: 0,
      showCloseButton: true,
      showCancelButton: true,
      showConfirmButton: false,
      cancelButtonText: t("components.message.Close"),
      focusCancel: true,
    }));
  },
  confirm: (message, onConfirm) =>
    import('sweetalert2').then(({default: Swal}) => Swal.fire({
      text: message,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3b82f6",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Ok",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        onConfirm();
      }
    })),
  dialogSendOTPSuccess: (message, onConfirm) =>
    Swal.fire({
      text: message,
      icon: "success",
      showCancelButton: false,
      confirmButtonColor: "#3b82f6",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Ok",
      padding: 0,

    }).then((result) => {
      if (result.isConfirmed) {
        onConfirm();
      }
    }),
  dialogSendOTP: (message, onConfirm) =>
    Swal.fire({
      text: t("components.message.Confirm OTP"),
      icon: "success",
      showCancelButton: false,
      confirmButtonColor: "#3b82f6",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
      padding: 0,

    }).then((result) => {
      if (result.isConfirmed) {
        onConfirm();
      }
    }),
  confirmEmail: ({
    message,
    title,
    reconfirmButtonText,
    closeButtonText,
    validationMessage,
    successMessage,
    delayDuration,
    resendEmail,
    emailConfirm,
    navigate,
  }) => {
    const MySwal = withReactContent(Swal);
    let IDSetTimeoutConfirm;

    const btnClass =
      "rounded-xl text-base font-bold p-2 basis-1/3 m-2 inline-block bg-white border border-blue-500 text-blue-500 ";
    const blueBtnClass = "bg-blue-500 text-white ";
    const disabledBtnClass = "bg-gray-500 text-white cursor-not-allowed ";
    const footerClass =
      " swal2-footer p-0 m-0 absolute bottom-1 flex justify-center items-center w-full bg-transparent border-0 ";

    return MySwal.fire({
      title,
      imageUrl: popup_confirm_email,
      text: message,
      showCloseButton: true,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: reconfirmButtonText,
      cancelButtonText: closeButtonText,
      buttonsStyling: false,
      showLoaderOnConfirm: true,
      padding: 0,
      footer: `<span class='font-bold text-green-600 left-24 text-sm sm:text-base'>${successMessage}</span>`,
      customClass: {
        confirmButton: btnClass + blueBtnClass,
        cancelButton: btnClass,
        actions: "bg-black/10 w-full p-5 pb-7 ",
        validationMessage:
          "absolute p-0 bottom-0 inline-block w-full flex justify-center items-center text-xs text-gray-500 font-bold bg-transparent text-center sm:p-2 sm:text-left",
        footer: footerClass + " invisible",
      },
      preConfirm: () => {
        return resendEmail(emailConfirm).then((response) => {
          if (response.status < 400) {
            let timeCount = delayDuration * 10;
            IDSetTimeoutConfirm = setInterval(() => {
              Swal.getConfirmButton().disabled = true;
              Swal.getConfirmButton().className =
                "swal2-confirm " + btnClass + disabledBtnClass;
              timeCount--;

              Swal.getFooter().className = footerClass + "visible";

              if (timeCount <= (delayDuration - 3) * 10) {
                Swal.getFooter().className = footerClass + "invisible";
                Swal.showValidationMessage(
                  `<span>${validationMessage}: ${parseInt(
                    timeCount / 10
                  )}s </span>`
                );
              }

              if (timeCount <= 0) {
                clearInterval(IDSetTimeoutConfirm);
                Swal.resetValidationMessage();
                Swal.getConfirmButton().disabled = false;
                Swal.getConfirmButton().className =
                  "swal2-confirm " + btnClass + blueBtnClass;
              }
            }, 100);
          }
          return false;
        });
      },
      willClose: () => {
        Swal.resetValidationMessage();
        Swal.getConfirmButton().disabled = false;
        Swal.getConfirmButton().className =
          "swal2-confirm " + btnClass + blueBtnClass;
        clearInterval(IDSetTimeoutConfirm);
      },
      didClose: () => {
        navigate(routerLinks("Login"), { replace: true });
      },
    });
  },

  successResetPassword: (message, onConfirm) =>
    Swal.fire({
      text: t("components.message.Please Login"),
      title: t("components.message.Saved"),
      icon: "success",
      showCancelButton: false,
      confirmButtonColor: "#A9A9A9",
      confirmButtonText: t("columns.admin.profile.LOGIN"),
      cancelButtonText: t("columns.admin.profile.Cancel"),
      padding: 0,
    }).then((result) => {
      onConfirm();
    }),

  successResetInfo: (message, onConfirm) =>
    Swal.fire({
      text: t("components.message.Saved Info"),
      title: t("components.message.Saved"),
      icon: "success",
      showCancelButton: false,
      confirmButtonColor: "#A9A9A9",
      confirmButtonText: t("components.message.Close"),
      padding: 0,
      customClass: {
        confirmButton: "bg-gray-500 text-white",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        onConfirm();
      }
    })
  ,
  submitSuccess: (message) =>
    Swal.fire({
      title: t("components.message.Success"),
      text: message,
      icon: "success",
      showConfirmButton: false,
      showCloseButton: true,
      showCancelButton: true,
      focusCancel: true,
      cancelButtonText: t("components.message.Close"),
      padding: 0,
    }),

  request: (title, message, approved, onConfirm) =>
    Swal.fire({
      title: title,
      text: message,
      icon: approved? "success" : "error",
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonColor: approved? "#3b82f6" : "#D22F23",
      confirmButtonText: t("components.message.Confirm"),
      cancelButtonText: t("components.message.Close"),
      padding: 0,
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        onConfirm();
      }
    }),

    userManagement:{
      delete:(t,onConfirm)=>Swal.fire({
        title: t("columns.admin.user.Confirm delete user"),
        text: t("columns.admin.user.Confirm delete text"),
        icon: t("error"),
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonColor: "#D22F23",
        confirmButtonText: t("components.message.Confirm"),
        cancelButtonText:   t("components.message.Close"),
        padding: 0,
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          onConfirm();
        }
      }),
      error:(subtitle,message)=>{
        return Swal.fire({
          icon: "error",
          title: t(subtitle),
          text: message,
          padding: 0,
          showCloseButton: true,
          showCancelButton: true,
          showConfirmButton: false,
          cancelButtonText:t("components.message.Close"),
          focusCancel: true,
        });
      },
    },
   topTimerError:(message)=>{
    Swal.fire({
      // position: 'top-end',
      icon: 'error',
      title: 'OOPs...',
      text:message,
      showConfirmButton: false,
      timer: 1500
    })
   }

};
export default Component;
