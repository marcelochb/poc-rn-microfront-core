import { IControllerFormData, IControllerGetData } from "@poc/interfaces"
import { useFormik } from "formik"
import { useState } from "react"
import { container } from "tsyringe"
import { CoreConstants } from "../../../../../core"
import { ICreateLoanUsecase, LoanEntity } from "../../../domain"
import { loanCreateDependences } from "../bind"

loanCreateDependences();
export const useLoanCreateController:IControllerFormData<LoanEntity> = (callback?: Function) => {
  const [error, setError] = useState(false);
  const useCase = container.resolve<ICreateLoanUsecase>(CoreConstants.CreateLoanUsecase);
  const formik = useFormik<LoanEntity>({
    initialValues: new LoanEntity({amount:'',id: '',name: '', type: ''}),
    onSubmit: async (value) => {
      try {
        await useCase.call(value);
        callback?.call(this);
      } catch (error) {
        setError(true);
      }
    }
  });
  return {
    data: {
      amount: formik.values.amount,
      id: formik.values.id,
      name: formik.values.name,
      type: formik.values.type
    }, 
    loading: formik.isSubmitting, 
    error,
    onSubmit: formik.handleSubmit,
    onChange: formik.handleChange,
  }
}