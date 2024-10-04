import { useFormik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { recipeSchema } from "@/lib/schemas";
import { RecipeFormProps } from "./RecipeForm.types";

import * as Field from "@/components/Fields";
import Header from "@/components/Forms/Header";
import Button from "@/components/UI/Button";
import CustomLink from "@/components/UI/CustomLink";

// TODO: add fieldsets
const RecipeForm = ({
  initialValues,
  onSubmit,
}: RecipeFormProps): JSX.Element => {
  const formik = useFormik({
    initialValues,
    validationSchema: toFormikValidationSchema(recipeSchema),
    onSubmit,
  });

  const {
    values,
    errors,
    touched,
    dirty,
    isValid,
    isSubmitting,
    setFieldValue,
    handleBlur,
    handleChange,
    handleSubmit,
  } = formik;

  return (
    <div className="mx-7 md:mx-auto lg:w-[60rem] xl:w-[70rem]">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center md:gap-7">
          <div>
            <div className="md:w-96">
              <Header title="Main information" hrColor="amber" />

              <Field.Text
                name="name"
                label="Name"
                placeholder="Enter the name of the dish..."
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                errorMsg={errors.name}
                isTouched={touched.name}
              />

              <Field.Textarea
                name="description"
                label="Description"
                placeholder="Describe your dish..."
                value={values.description}
                errorMsg={errors.description}
                isTouched={touched.description}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <Field.File
                name="file"
                label="Photo (preview)"
                errorMsg={errors.file}
                currentImg={values.img}
                value={values.file}
                setValue={setFieldValue}
              />

              <Field.Checkbox
                name="status"
                label="Status"
                checked={values.status}
                onChange={handleChange}
              />

              <div className="flex flex-nowrap justify-between gap-3">
                <Field.Text
                  type="number"
                  name="details.duration"
                  label="Time (in mins)"
                  placeholder="Minutes⌛.."
                  step={1}
                  value={values.details.duration}
                  errorMsg={errors.details?.duration}
                  isTouched={touched.details?.duration}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <Field.Text
                  type="number"
                  name="details.portions"
                  label="Portions (pieces)"
                  placeholder="e.g. 10 pieces..."
                  step={0.1}
                  value={values.details.portions}
                  errorMsg={errors.details?.portions}
                  isTouched={touched.details?.portions}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>

              <Field.Select
                name="details.level"
                label="Difficulty"
                value={values.details.level}
                errorMsg={errors.details?.level}
                isTouched={touched.details?.level}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <div className="md:w-96">
              <Header title="Nutritional values" hrColor="rose" />

              <Field.Text
                type="number"
                name="nutrions.calories"
                label="Calories (kcal)"
                placeholder="total calories...?"
                step={0.1}
                value={values.nutrions.calories}
                errorMsg={errors.nutrions?.calories}
                isTouched={touched.nutrions?.calories}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <div className="flex flex-col md:flex-row md:gap-3">
                <Field.Text
                  type="number"
                  name="nutrions.protein"
                  label="Protein (g)"
                  placeholder="The amount of protein in..."
                  step={0.1}
                  value={values.nutrions.protein}
                  errorMsg={errors.nutrions?.protein}
                  isTouched={touched.nutrions?.protein}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <Field.Text
                  type="number"
                  name="nutrions.carbohydrates"
                  label="Carbohydrates (g)"
                  placeholder="Carbohydrates (g)??..."
                  step={0.1}
                  value={values.nutrions.carbohydrates}
                  errorMsg={errors.nutrions?.carbohydrates}
                  isTouched={touched.nutrions?.carbohydrates}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <Field.Text
                  type="number"
                  name="nutrions.fat"
                  label="Fats (g)"
                  placeholder="Fats (g)..???"
                  step={0.1}
                  value={values.nutrions.fat}
                  errorMsg={errors.nutrions?.fat}
                  isTouched={touched.nutrions?.fat}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>
          </div>

          <div>
            <div className="md:w-96">
              <Header title="Ingredients" hrColor="blue" />

              <Field.Dynamic
                name="ingredients"
                placeholder="Enter ingredient..."
                listType="list-disc"
                errorMsg={errors.ingredients}
                value={values.ingredients}
                setValue={setFieldValue}
              />
            </div>

            <div className="md:w-96">
              <Header title="Preparation" hrColor="green" />

              <Field.Dynamic
                name="steps"
                placeholder="Enter step..."
                listType="list-decimal"
                errorMsg={errors.steps}
                value={values.steps}
                setValue={setFieldValue}
              />
            </div>
          </div>
        </div>

        <div className="my-12 flex justify-center items-center gap-5">
          <CustomLink href="/profile/recipes" color="red">
            Cancel
          </CustomLink>
          <Button
            type="submit"
            color="green"
            disabled={!isValid || isSubmitting || !dirty}
            loadingMsg="Addition"
          >
            Add
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RecipeForm;
