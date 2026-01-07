import { AnimatePresence, motion } from "motion/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Loader } from "lucide-react";
import { useLang } from "../store/use-lang";
import { useScrollTop } from "../hooks/use-scroll-top";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "../components/ui/form";
import { cn } from "../lib/utils";
import { useTranslation } from "react-i18next";
import { Field } from "../components/shared/field";
import { Button } from "../components/ui/button";
import type { StandFormType } from "./stand-form.schema";
import { standFormSchema, standDefaultValues } from "./stand-form.schema";
import { FormSuccesStatus } from "../components/shared/form-success-status";
import { postStand } from "@/api/service";

interface Props {
  className?: string;
}

export default function StandForm({ className }: Props) {
  useScrollTop();

  const lang = useLang((state) => state.locale.value);
  const [success, setSuccess] = useState(false);
  const form = useForm<StandFormType>({
    resolver: zodResolver(standFormSchema),
    defaultValues: standDefaultValues,
  });

  const onSubmit = async (data: StandFormType) => {
    try {
      if (data.space_package === "package") return;

      const transformedData = {
        ...data,
        space_package:
          data.space_package === "package"
            ? ""
            : data.space_package === "1"
            ? "Participate as a visitor (free of charge)"
            : data.space_package === "2"
            ? "Participate as an exhibitor - Stand Space only"
            : data.space_package === "3"
            ? "Participate as an exhibitor - Prefabricated stand"
            : "",
      };

      const status = await postStand(transformedData, lang);

      setSuccess(status);
    } catch (error) {
      console.error("POST stend-form. Error:", error);
    }
  };

  const { t } = useTranslation("form");

  const { errors } = form.formState;

  return (
    <div className={className}>
      <AnimatePresence>
        {!success && (
          <Form {...form}>
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-[828px] px-5 mx-auto md:mt-20 mt-10 mb-[120px] flex flex-col gap-8"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="space_package"
                render={({ field }) => (
                  <FormItem className="space-y-5 relative">
                    <FormLabel className="text-xl">{t("stand.h2")}</FormLabel>

                    <FormControl>
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                        className="flex flex-col space-y-4 sm:ml-3"
                      >
                        <FormItem className="flex items-center space-x-5 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="1" />
                          </FormControl>
                          <FormLabel className="text-base cursor-pointer">
                            {t("stand.radio")}
                          </FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-5 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="package" />
                          </FormControl>
                          <FormLabel className="text-base cursor-pointer">
                            {t("stand.radio_2")}
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>

                    <div className="text-error! font-normal text-sm absolute -bottom-[140px]">
                      {errors.space_package?.message}
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="space_package"
                render={({ field }) => (
                  <FormItem
                    className={cn(
                      "space-y-5 ml-14",
                      field.value !== "package" &&
                        field.value !== "2" &&
                        field.value !== "3" &&
                        "opacity-50 pointer-events-none relative"
                    )}
                  >
                    <FormControl>
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                        className="flex flex-col space-y-4 ml-3 "
                      >
                        <FormItem className="flex items-center space-x-5 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="2" />
                          </FormControl>
                          <FormLabel className="text-base cursor-pointer">
                            {t("stand.radio_group.radio")}
                          </FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-5 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="3" />
                          </FormControl>
                          <FormLabel className="text-base cursor-pointer">
                            {t("stand.radio_group.radio_2")}
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />

              <Field
                className="mt-6"
                label={t("stand.label_1")}
                name="company_name"
                control={form.control}
                error={errors.company_name}
              />
              <Field
                label={t("stand.label_2")}
                name="rep_name"
                control={form.control}
                error={errors.rep_name}
              />
              <Field
                label={t("stand.label_3")}
                name="job_title"
                control={form.control}
                error={errors.job_title}
              />
              <Field
                label={t("stand.number_of_participants")}
                type="number"
                name="participants_number"
                control={form.control}
                error={errors.participants_number}
              />
              <Field
                label={t("stand.label_4")}
                name="country"
                control={form.control}
                error={errors.country}
              />
              <Field
                label={t("stand.label_5")}
                name="email"
                control={form.control}
                error={errors.email}
              />
              <Field
                label={t("stand.label_6")}
                name="phone"
                control={form.control}
                error={errors.phone}
              />

              <Field
                label={t("stand.label_7")}
                name="website"
                control={form.control}
              />

              <FormField
                control={form.control}
                name="visa_support"
                render={({ field }) => (
                  <FormItem className="space-y-5">
                    <FormLabel className="text-xl">{t("stand.visa")}</FormLabel>

                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-4 ml-3"
                      >
                        <FormItem className="flex items-center space-x-5 space-y-0">
                          <FormControl>
                            <RadioGroupItem
                              value={"yes"}
                              checked={field.value === "yes"}
                            />
                          </FormControl>
                          <FormLabel className="text-base">
                            {t("stand.visa_radio")}
                          </FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-5 space-y-0 ">
                          <FormControl>
                            <RadioGroupItem
                              value={"no"}
                              checked={field.value === "no"}
                            />
                          </FormControl>
                          <FormLabel className="text-base">
                            {t("stand.visa_radio_2")}
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button
                variant={"outline"}
                disabled={form.formState.isSubmitting}
                className="button mt-5"
              >
                {form.formState.isSubmitting ? (
                  <Loader className="animate-spin" />
                ) : (
                  t("stand.button")
                )}
              </Button>
            </motion.form>
          </Form>
        )}
      </AnimatePresence>

      {success && <FormSuccesStatus delay={0.3} />}
    </div>
  );
}
