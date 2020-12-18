// loop for import list

import { AccountingPeriod } from './ERPModel/accounts/accounting_period/accountingPeriods.model.ts';

import { AccountsSetting } from './ERPModel/accounts/accounts_settings/accountsSettings.model.ts';

import { AllowedToTransactWith } from './ERPModel/accounts/allowed_to_transact_with/allowedToTransactWiths.model.ts';

import { Bank } from './ERPModel/accounts/bank/banks.model.ts';

import { BankAccount } from './ERPModel/accounts/bank_account/bankAccounts.model.ts';

import { BankGuarantee } from './ERPModel/accounts/bank_guarantee/bankGuarantees.model.ts';

import { BankReconciliation } from './ERPModel/accounts/bank_reconciliation/bankReconciliations.model.ts';

import { BankReconciliationDetail } from './ERPModel/accounts/bank_reconciliation_detail/bankReconciliationDetails.model.ts';

import { BankStatementSetting } from './ERPModel/accounts/bank_statement_settings/bankStatementSettings.model.ts';

import { BankStatementSettingsItem } from './ERPModel/accounts/bank_statement_settings_item/bankStatementSettingsItems.model.ts';

import { BankStatementTransactionEntry } from './ERPModel/accounts/bank_statement_transaction_entry/bankStatementTransactionEntries.model.ts';

import { BankStatementTransactionInvoiceItem } from './ERPModel/accounts/bank_statement_transaction_invoice_item/bankStatementTransactionInvoiceItems.model.ts';

import { BankStatementTransactionPaymentItem } from './ERPModel/accounts/bank_statement_transaction_payment_item/bankStatementTransactionPaymentItems.model.ts';

import { BankStatementTransactionSetting } from './ERPModel/accounts/bank_statement_transaction_settings/bankStatementTransactionSettings.model.ts';

import { BankStatementTransactionSettingsItem } from './ERPModel/accounts/bank_statement_transaction_settings_item/bankStatementTransactionSettingsItems.model.ts';

import { Budget } from './ERPModel/accounts/budget/budgets.model.ts';

import { BudgetAccount } from './ERPModel/accounts/budget_account/budgetAccounts.model.ts';

import { CForm } from './ERPModel/accounts/c_form/cForms.model.ts';

import { CFormInvoiceDetail } from './ERPModel/accounts/c_form_invoice_detail/cFormInvoiceDetails.model.ts';

import { CashFlowMapper } from './ERPModel/accounts/cash_flow_mapper/cashFlowMappers.model.ts';

import { CashFlowMapping } from './ERPModel/accounts/cash_flow_mapping/cashFlowMappings.model.ts';

import { CashFlowMappingAccount } from './ERPModel/accounts/cash_flow_mapping_accounts/cashFlowMappingAccounts.model.ts';

import { CashFlowMappingTemplate } from './ERPModel/accounts/cash_flow_mapping_template/cashFlowMappingTemplates.model.ts';

import { CashFlowMappingTemplateDetail } from './ERPModel/accounts/cash_flow_mapping_template_details/cashFlowMappingTemplateDetails.model.ts';

import { CashierClosing } from './ERPModel/accounts/cashier_closing/cashierClosings.model.ts';

import { CashierClosingPayment } from './ERPModel/accounts/cashier_closing_payments/cashierClosingPayments.model.ts';

import { ChequePrintTemplate } from './ERPModel/accounts/cheque_print_template/chequePrintTemplates.model.ts';

import { ClosedDocument } from './ERPModel/accounts/closed_document/closedDocuments.model.ts';

import { CostCenter } from './ERPModel/accounts/cost_center/costCenters.model.ts';

import { ExchangeRateRevaluation } from './ERPModel/accounts/exchange_rate_revaluation/exchangeRateRevaluations.model.ts';

import { ExchangeRateRevaluationAccount } from './ERPModel/accounts/exchange_rate_revaluation_account/exchangeRateRevaluationAccounts.model.ts';

import { FinanceBook } from './ERPModel/accounts/finance_book/financeBooks.model.ts';

import { FiscalYear } from './ERPModel/accounts/fiscal_year/fiscalYears.model.ts';

import { FiscalYearCompany } from './ERPModel/accounts/fiscal_year_company/fiscalYearCompanies.model.ts';

import { GlEntry } from './ERPModel/accounts/gl_entry/glEntries.model.ts';

import { GstAccount } from './ERPModel/accounts/gst_account/gstAccounts.model.ts';

import { ItemTaxTemplate } from './ERPModel/accounts/item_tax_template/itemTaxTemplates.model.ts';

import { ItemTaxTemplateDetail } from './ERPModel/accounts/item_tax_template_detail/itemTaxTemplateDetails.model.ts';

import { JournalEntry } from './ERPModel/accounts/journal_entry/journalEntries.model.ts';

import { JournalEntryAccount } from './ERPModel/accounts/journal_entry_account/journalEntryAccounts.model.ts';

import { LoyaltyPointEntry } from './ERPModel/accounts/loyalty_point_entry/loyaltyPointEntries.model.ts';

import { LoyaltyPointEntryRedemption } from './ERPModel/accounts/loyalty_point_entry_redemption/loyaltyPointEntryRedemptions.model.ts';

import { LoyaltyProgram } from './ERPModel/accounts/loyalty_program/loyaltyPrograms.model.ts';

import { LoyaltyProgramCollection } from './ERPModel/accounts/loyalty_program_collection/loyaltyProgramCollections.model.ts';

import { ModeOfPayment } from './ERPModel/accounts/mode_of_payment/modeOfPayments.model.ts';

import { ModeOfPaymentAccount } from './ERPModel/accounts/mode_of_payment_account/modeOfPaymentAccounts.model.ts';

import { MonthlyDistribution } from './ERPModel/accounts/monthly_distribution/monthlyDistributions.model.ts';

import { MonthlyDistributionPercentage } from './ERPModel/accounts/monthly_distribution_percentage/monthlyDistributionPercentages.model.ts';

import { OpeningInvoiceCreationTool } from './ERPModel/accounts/opening_invoice_creation_tool/openingInvoiceCreationTools.model.ts';

import { OpeningInvoiceCreationToolItem } from './ERPModel/accounts/opening_invoice_creation_tool_item/openingInvoiceCreationToolItems.model.ts';

import { PartyAccount } from './ERPModel/accounts/party_account/partyAccounts.model.ts';

import { PaymentEntry } from './ERPModel/accounts/payment_entry/paymentEntries.model.ts';

import { PaymentEntryDeduction } from './ERPModel/accounts/payment_entry_deduction/paymentEntryDeductions.model.ts';

import { PaymentEntryReference } from './ERPModel/accounts/payment_entry_reference/paymentEntryReferences.model.ts';

import { PaymentGatewayAccount } from './ERPModel/accounts/payment_gateway_account/paymentGatewayAccounts.model.ts';

import { PaymentOrder } from './ERPModel/accounts/payment_order/paymentOrders.model.ts';

import { PaymentOrderReference } from './ERPModel/accounts/payment_order_reference/paymentOrderReferences.model.ts';

import { PaymentReconciliation } from './ERPModel/accounts/payment_reconciliation/paymentReconciliations.model.ts';

import { PaymentReconciliationInvoice } from './ERPModel/accounts/payment_reconciliation_invoice/paymentReconciliationInvoices.model.ts';

import { PaymentReconciliationPayment } from './ERPModel/accounts/payment_reconciliation_payment/paymentReconciliationPayments.model.ts';

import { PaymentRequest } from './ERPModel/accounts/payment_request/paymentRequests.model.ts';

import { PaymentSchedule } from './ERPModel/accounts/payment_schedule/paymentSchedules.model.ts';

import { PaymentTerm } from './ERPModel/accounts/payment_term/paymentTerms.model.ts';

import { PaymentTermsTemplate } from './ERPModel/accounts/payment_terms_template/paymentTermsTemplates.model.ts';

import { PaymentTermsTemplateDetail } from './ERPModel/accounts/payment_terms_template_detail/paymentTermsTemplateDetails.model.ts';

import { PeriodClosingVoucher } from './ERPModel/accounts/period_closing_voucher/periodClosingVouchers.model.ts';

import { PosCustomerGroup } from './ERPModel/accounts/pos_customer_group/posCustomerGroups.model.ts';

import { PosItemGroup } from './ERPModel/accounts/pos_item_group/posItemGroups.model.ts';

import { PosProfile } from './ERPModel/accounts/pos_profile/posProfiles.model.ts';

import { PosProfileUser } from './ERPModel/accounts/pos_profile_user/posProfileUsers.model.ts';

import { PosSetting } from './ERPModel/accounts/pos_settings/posSettings.model.ts';

import { PricingRule } from './ERPModel/accounts/pricing_rule/pricingRules.model.ts';

import { PurchaseInvoice } from './ERPModel/accounts/purchase_invoice/purchaseInvoices.model.ts';

import { PurchaseInvoiceAdvance } from './ERPModel/accounts/purchase_invoice_advance/purchaseInvoiceAdvances.model.ts';

import { PurchaseInvoiceItem } from './ERPModel/accounts/purchase_invoice_item/purchaseInvoiceItems.model.ts';

import { PurchaseTaxesAndCharge } from './ERPModel/accounts/purchase_taxes_and_charges/purchaseTaxesAndCharges.model.ts';

import { PurchaseTaxesAndChargesTemplate } from './ERPModel/accounts/purchase_taxes_and_charges_template/purchaseTaxesAndChargesTemplates.model.ts';

import { SalaryComponentAccount } from './ERPModel/accounts/salary_component_account/salaryComponentAccounts.model.ts';

import { SalesInvoice } from './ERPModel/accounts/sales_invoice/salesInvoices.model.ts';

import { SalesInvoiceAdvance } from './ERPModel/accounts/sales_invoice_advance/salesInvoiceAdvances.model.ts';

import { SalesInvoiceItem } from './ERPModel/accounts/sales_invoice_item/salesInvoiceItems.model.ts';

import { SalesInvoicePayment } from './ERPModel/accounts/sales_invoice_payment/salesInvoicePayments.model.ts';

import { SalesInvoiceTimesheet } from './ERPModel/accounts/sales_invoice_timesheet/salesInvoiceTimesheets.model.ts';

import { SalesTaxesAndCharge } from './ERPModel/accounts/sales_taxes_and_charges/salesTaxesAndCharges.model.ts';

import { SalesTaxesAndChargesTemplate } from './ERPModel/accounts/sales_taxes_and_charges_template/salesTaxesAndChargesTemplates.model.ts';

import { ShareBalance } from './ERPModel/accounts/share_balance/shareBalances.model.ts';

import { ShareTransfer } from './ERPModel/accounts/share_transfer/shareTransfers.model.ts';

import { ShareType } from './ERPModel/accounts/share_type/shareTypes.model.ts';

import { Shareholder } from './ERPModel/accounts/shareholder/shareholders.model.ts';

import { ShippingRule } from './ERPModel/accounts/shipping_rule/shippingRules.model.ts';

import { ShippingRuleCondition } from './ERPModel/accounts/shipping_rule_condition/shippingRuleConditions.model.ts';

import { ShippingRuleCountry } from './ERPModel/accounts/shipping_rule_country/shippingRuleCountries.model.ts';

import { Subscription } from './ERPModel/accounts/subscription/subscriptions.model.ts';

import { SubscriptionInvoice } from './ERPModel/accounts/subscription_invoice/subscriptionInvoices.model.ts';

import { SubscriptionPlan } from './ERPModel/accounts/subscription_plan/subscriptionPlans.model.ts';

import { SubscriptionPlanDetail } from './ERPModel/accounts/subscription_plan_detail/subscriptionPlanDetails.model.ts';

import { SubscriptionSetting } from './ERPModel/accounts/subscription_settings/subscriptionSettings.model.ts';

import { TaxCategory } from './ERPModel/accounts/tax_category/taxCategories.model.ts';

import { TaxRule } from './ERPModel/accounts/tax_rule/taxRules.model.ts';

import { TaxWithholdingAccount } from './ERPModel/accounts/tax_withholding_account/taxWithholdingAccounts.model.ts';

import { TaxWithholdingCategory } from './ERPModel/accounts/tax_withholding_category/taxWithholdingCategories.model.ts';

import { TaxWithholdingRate } from './ERPModel/accounts/tax_withholding_rate/taxWithholdingRates.model.ts';

import { Asset } from './ERPModel/assets/asset/assets.model.ts';

import { AssetCategory } from './ERPModel/assets/asset_category/assetCategories.model.ts';

import { AssetCategoryAccount } from './ERPModel/assets/asset_category_account/assetCategoryAccounts.model.ts';

import { AssetFinanceBook } from './ERPModel/assets/asset_finance_book/assetFinanceBooks.model.ts';

import { AssetMaintenance } from './ERPModel/assets/asset_maintenance/assetMaintenances.model.ts';

import { AssetMaintenanceLog } from './ERPModel/assets/asset_maintenance_log/assetMaintenanceLogs.model.ts';

import { AssetMaintenanceTask } from './ERPModel/assets/asset_maintenance_task/assetMaintenanceTasks.model.ts';

import { AssetMaintenanceTeam } from './ERPModel/assets/asset_maintenance_team/assetMaintenanceTeams.model.ts';

import { AssetMovement } from './ERPModel/assets/asset_movement/assetMovements.model.ts';

import { AssetRepair } from './ERPModel/assets/asset_repair/assetRepairs.model.ts';

import { AssetSetting } from './ERPModel/assets/asset_settings/assetSettings.model.ts';

import { AssetValueAdjustment } from './ERPModel/assets/asset_value_adjustment/assetValueAdjustments.model.ts';

import { DepreciationSchedule } from './ERPModel/assets/depreciation_schedule/depreciationSchedules.model.ts';

import { LinkedLocation } from './ERPModel/assets/linked_location/linkedLocations.model.ts';

import { Location } from './ERPModel/assets/location/locations.model.ts';

import { MaintenanceTeamMember } from './ERPModel/assets/maintenance_team_member/maintenanceTeamMembers.model.ts';

import { AdditionalSalary } from './ERPModel/hr/additional_salary/additionalSalaries.model.ts';

import { Appraisal } from './ERPModel/hr/appraisal/appraisals.model.ts';

import { AppraisalGoal } from './ERPModel/hr/appraisal_goal/appraisalGoals.model.ts';

import { Attendance } from './ERPModel/hr/attendance/attendances.model.ts';

import { AttendanceRequest } from './ERPModel/hr/attendance_request/attendanceRequests.model.ts';

import { Branch } from './ERPModel/hr/branch/branches.model.ts';

import { CompensatoryLeaveRequest } from './ERPModel/hr/compensatory_leave_request/compensatoryLeaveRequests.model.ts';

import { DailyWorkSummary } from './ERPModel/hr/daily_work_summary/dailyWorkSummaries.model.ts';

import { DailyWorkSummaryGroup } from './ERPModel/hr/daily_work_summary_group/dailyWorkSummaryGroups.model.ts';

import { DailyWorkSummaryGroupUser } from './ERPModel/hr/daily_work_summary_group_user/dailyWorkSummaryGroupUsers.model.ts';

import { Department } from './ERPModel/hr/department/departments.model.ts';

import { DepartmentApprover } from './ERPModel/hr/department_approver/departmentApprovers.model.ts';

import { Designation } from './ERPModel/hr/designation/designations.model.ts';

import { Driver } from './ERPModel/hr/driver/drivers.model.ts';

import { DrivingLicenseCategory } from './ERPModel/hr/driving_license_category/drivingLicenseCategories.model.ts';

import { Employee } from './ERPModel/hr/employee/employees.model.ts';

import { EmployeeAdvance } from './ERPModel/hr/employee_advance/employeeAdvances.model.ts';

import { EmployeeAttendanceTool } from './ERPModel/hr/employee_attendance_tool/employeeAttendanceTools.model.ts';

import { EmployeeBenefitApplication } from './ERPModel/hr/employee_benefit_application/employeeBenefitApplications.model.ts';

import { EmployeeBenefitApplicationDetail } from './ERPModel/hr/employee_benefit_application_detail/employeeBenefitApplicationDetails.model.ts';

import { EmployeeBenefitClaim } from './ERPModel/hr/employee_benefit_claim/employeeBenefitClaims.model.ts';

import { EmployeeBoardingActivity } from './ERPModel/hr/employee_boarding_activity/employeeBoardingActivities.model.ts';

import { EmployeeEducation } from './ERPModel/hr/employee_education/employeeEducations.model.ts';

import { EmployeeExternalWorkHistory } from './ERPModel/hr/employee_external_work_history/employeeExternalWorkHistories.model.ts';

import { EmployeeGrade } from './ERPModel/hr/employee_grade/employeeGrades.model.ts';

import { EmployeeHealthInsurance } from './ERPModel/hr/employee_health_insurance/employeeHealthInsurances.model.ts';

import { EmployeeIncentive } from './ERPModel/hr/employee_incentive/employeeIncentives.model.ts';

import { EmployeeInternalWorkHistory } from './ERPModel/hr/employee_internal_work_history/employeeInternalWorkHistories.model.ts';

import { EmployeeOnboarding } from './ERPModel/hr/employee_onboarding/employeeOnboardings.model.ts';

import { EmployeeOnboardingActivity } from './ERPModel/hr/employee_onboarding_activity/employeeOnboardingActivities.model.ts';

import { EmployeeOnboardingTemplate } from './ERPModel/hr/employee_onboarding_template/employeeOnboardingTemplates.model.ts';

import { EmployeePromotion } from './ERPModel/hr/employee_promotion/employeePromotions.model.ts';

import { EmployeePropertyHistory } from './ERPModel/hr/employee_property_history/employeePropertyHistories.model.ts';

import { EmployeeSeparation } from './ERPModel/hr/employee_separation/employeeSeparations.model.ts';

import { EmployeeSeparationTemplate } from './ERPModel/hr/employee_separation_template/employeeSeparationTemplates.model.ts';

import { EmployeeTaxExemptionCategory } from './ERPModel/hr/employee_tax_exemption_category/employeeTaxExemptionCategories.model.ts';

import { EmployeeTaxExemptionDeclaration } from './ERPModel/hr/employee_tax_exemption_declaration/employeeTaxExemptionDeclarations.model.ts';

import { EmployeeTaxExemptionDeclarationCategory } from './ERPModel/hr/employee_tax_exemption_declaration_category/employeeTaxExemptionDeclarationCategories.model.ts';

import { EmployeeTaxExemptionProofSubmission } from './ERPModel/hr/employee_tax_exemption_proof_submission/employeeTaxExemptionProofSubmissions.model.ts';

import { EmployeeTaxExemptionProofSubmissionDetail } from './ERPModel/hr/employee_tax_exemption_proof_submission_detail/employeeTaxExemptionProofSubmissionDetails.model.ts';

import { EmployeeTaxExemptionSubCategory } from './ERPModel/hr/employee_tax_exemption_sub_category/employeeTaxExemptionSubCategories.model.ts';

import { EmployeeTransfer } from './ERPModel/hr/employee_transfer/employeeTransfers.model.ts';

import { EmployeeTransferProperty } from './ERPModel/hr/employee_transfer_property/employeeTransferProperties.model.ts';

import { EmploymentType } from './ERPModel/hr/employment_type/employmentTypes.model.ts';

import { ExpenseClaim } from './ERPModel/hr/expense_claim/expenseClaims.model.ts';

import { ExpenseClaimAccount } from './ERPModel/hr/expense_claim_account/expenseClaimAccounts.model.ts';

import { ExpenseClaimAdvance } from './ERPModel/hr/expense_claim_advance/expenseClaimAdvances.model.ts';

import { ExpenseClaimDetail } from './ERPModel/hr/expense_claim_detail/expenseClaimDetails.model.ts';

import { ExpenseClaimType } from './ERPModel/hr/expense_claim_type/expenseClaimTypes.model.ts';

import { Holiday } from './ERPModel/hr/holiday/holidays.model.ts';

import { HolidayList } from './ERPModel/hr/holiday_list/holidayLists.model.ts';

import { HrSetting } from './ERPModel/hr/hr_settings/hrSettings.model.ts';

import { IdentificationDocumentType } from './ERPModel/hr/identification_document_type/identificationDocumentTypes.model.ts';

import { Interest } from './ERPModel/hr/interest/interests.model.ts';

import { JobApplicant } from './ERPModel/hr/job_applicant/jobApplicants.model.ts';

import { JobApplicantSource } from './ERPModel/hr/job_applicant_source/jobApplicantSources.model.ts';

import { JobOffer } from './ERPModel/hr/job_offer/jobOffers.model.ts';

import { JobOfferTerm } from './ERPModel/hr/job_offer_term/jobOfferTerms.model.ts';

import { JobOpening } from './ERPModel/hr/job_opening/jobOpenings.model.ts';

import { LeaveAllocation } from './ERPModel/hr/leave_allocation/leaveAllocations.model.ts';

import { LeaveApplication } from './ERPModel/hr/leave_application/leaveApplications.model.ts';

import { LeaveBlockList } from './ERPModel/hr/leave_block_list/leaveBlockLists.model.ts';

import { LeaveBlockListAllow } from './ERPModel/hr/leave_block_list_allow/leaveBlockListAllows.model.ts';

import { LeaveBlockListDate } from './ERPModel/hr/leave_block_list_date/leaveBlockListDates.model.ts';

import { LeaveControlPanel } from './ERPModel/hr/leave_control_panel/leaveControlPanels.model.ts';

import { LeaveEncashment } from './ERPModel/hr/leave_encashment/leaveEncashments.model.ts';

import { LeavePeriod } from './ERPModel/hr/leave_period/leavePeriods.model.ts';

import { LeavePolicy } from './ERPModel/hr/leave_policy/leavePolicies.model.ts';

import { LeavePolicyDetail } from './ERPModel/hr/leave_policy_detail/leavePolicyDetails.model.ts';

import { LeaveType } from './ERPModel/hr/leave_type/leaveTypes.model.ts';

import { Loan } from './ERPModel/hr/loan/loans.model.ts';

import { LoanApplication } from './ERPModel/hr/loan_application/loanApplications.model.ts';

import { LoanType } from './ERPModel/hr/loan_type/loanTypes.model.ts';

import { OfferTerm } from './ERPModel/hr/offer_term/offerTerms.model.ts';

import { PayrollEmployeeDetail } from './ERPModel/hr/payroll_employee_detail/payrollEmployeeDetails.model.ts';

import { PayrollEntry } from './ERPModel/hr/payroll_entry/payrollEntries.model.ts';

import { PayrollPeriod } from './ERPModel/hr/payroll_period/payrollPeriods.model.ts';

import { PayrollPeriodDate } from './ERPModel/hr/payroll_period_date/payrollPeriodDates.model.ts';

import { PurposeOfTravel } from './ERPModel/hr/purpose_of_travel/purposeOfTravels.model.ts';

import { RepaymentSchedule } from './ERPModel/hr/repayment_schedule/repaymentSchedules.model.ts';

import { RetentionBonu } from './ERPModel/hr/retention_bonus/retentionBonuses.model.ts';

import { SalaryComponent } from './ERPModel/hr/salary_component/salaryComponents.model.ts';

import { SalaryDetail } from './ERPModel/hr/salary_detail/salaryDetails.model.ts';

import { SalarySlip } from './ERPModel/hr/salary_slip/salarySlips.model.ts';

import { SalarySlipLoan } from './ERPModel/hr/salary_slip_loan/salarySlipLoans.model.ts';

import { SalarySlipTimesheet } from './ERPModel/hr/salary_slip_timesheet/salarySlipTimesheets.model.ts';

import { SalaryStructure } from './ERPModel/hr/salary_structure/salaryStructures.model.ts';

import { SalaryStructureAssignment } from './ERPModel/hr/salary_structure_assignment/salaryStructureAssignments.model.ts';

import { ShiftAssignment } from './ERPModel/hr/shift_assignment/shiftAssignments.model.ts';

import { ShiftRequest } from './ERPModel/hr/shift_request/shiftRequests.model.ts';

import { ShiftType } from './ERPModel/hr/shift_type/shiftTypes.model.ts';

import { StaffingPlan } from './ERPModel/hr/staffing_plan/staffingPlans.model.ts';

import { StaffingPlanDetail } from './ERPModel/hr/staffing_plan_detail/staffingPlanDetails.model.ts';

import { TaxableSalarySlab } from './ERPModel/hr/taxable_salary_slab/taxableSalarySlabs.model.ts';

import { TrainingEvent } from './ERPModel/hr/training_event/trainingEvents.model.ts';

import { TrainingEventEmployee } from './ERPModel/hr/training_event_employee/trainingEventEmployees.model.ts';

import { TrainingFeedback } from './ERPModel/hr/training_feedback/trainingFeedbacks.model.ts';

import { TrainingProgram } from './ERPModel/hr/training_program/trainingPrograms.model.ts';

import { TrainingResult } from './ERPModel/hr/training_result/trainingResults.model.ts';

import { TrainingResultEmployee } from './ERPModel/hr/training_result_employee/trainingResultEmployees.model.ts';

import { TravelItinerary } from './ERPModel/hr/travel_itinerary/travelItineraries.model.ts';

import { TravelRequest } from './ERPModel/hr/travel_request/travelRequests.model.ts';

import { TravelRequestCosting } from './ERPModel/hr/travel_request_costing/travelRequestCostings.model.ts';

import { UploadAttendance } from './ERPModel/hr/upload_attendance/uploadAttendances.model.ts';

import { Vehicle } from './ERPModel/hr/vehicle/vehicles.model.ts';

import { VehicleLog } from './ERPModel/hr/vehicle_log/vehicleLogs.model.ts';

import { VehicleService } from './ERPModel/hr/vehicle_service/vehicleServices.model.ts';

import { ActivityCost } from './ERPModel/projects/activity_cost/activityCosts.model.ts';

import { ActivityType } from './ERPModel/projects/activity_type/activityTypes.model.ts';

import { DependentTask } from './ERPModel/projects/dependent_task/dependentTasks.model.ts';

import { Project } from './ERPModel/projects/project/projects.model.ts';

import { ProjectTask } from './ERPModel/projects/project_task/projectTasks.model.ts';

import { ProjectTemplate } from './ERPModel/projects/project_template/projectTemplates.model.ts';

import { ProjectTemplateTask } from './ERPModel/projects/project_template_task/projectTemplateTasks.model.ts';

import { ProjectType } from './ERPModel/projects/project_type/projectTypes.model.ts';

import { ProjectUpdate } from './ERPModel/projects/project_update/projectUpdates.model.ts';

import { ProjectUser } from './ERPModel/projects/project_user/projectUsers.model.ts';

import { ProjectsSetting } from './ERPModel/projects/projects_settings/projectsSettings.model.ts';

import { Task } from './ERPModel/projects/task/tasks.model.ts';

import { TaskDependsOn } from './ERPModel/projects/task_depends_on/taskDependsOns.model.ts';

import { Timesheet } from './ERPModel/projects/timesheet/timesheets.model.ts';

import { TimesheetDetail } from './ERPModel/projects/timesheet_detail/timesheetDetails.model.ts';


// Loop for a models list
export const models = [
AccountingPeriod,
  AccountsSetting,
  AllowedToTransactWith,
  Bank,
  BankAccount,
  BankGuarantee,
  BankReconciliation,
  BankReconciliationDetail,
  BankStatementSetting,
  BankStatementSettingsItem,
  BankStatementTransactionEntry,
  BankStatementTransactionInvoiceItem,
  BankStatementTransactionPaymentItem,
  BankStatementTransactionSetting,
  BankStatementTransactionSettingsItem,
  Budget,
  BudgetAccount,
  CForm,
  CFormInvoiceDetail,
  CashFlowMapper,
  CashFlowMapping,
  CashFlowMappingAccount,
  CashFlowMappingTemplate,
  CashFlowMappingTemplateDetail,
  CashierClosing,
  CashierClosingPayment,
  ChequePrintTemplate,
  ClosedDocument,
  CostCenter,
  ExchangeRateRevaluation,
  ExchangeRateRevaluationAccount,
  FinanceBook,
  FiscalYear,
  FiscalYearCompany,
  GlEntry,
  GstAccount,
  ItemTaxTemplate,
  ItemTaxTemplateDetail,
  JournalEntry,
  JournalEntryAccount,
  LoyaltyPointEntry,
  LoyaltyPointEntryRedemption,
  LoyaltyProgram,
  LoyaltyProgramCollection,
  ModeOfPayment,
  ModeOfPaymentAccount,
  MonthlyDistribution,
  MonthlyDistributionPercentage,
  OpeningInvoiceCreationTool,
  OpeningInvoiceCreationToolItem,
  PartyAccount,
  PaymentEntry,
  PaymentEntryDeduction,
  PaymentEntryReference,
  PaymentGatewayAccount,
  PaymentOrder,
  PaymentOrderReference,
  PaymentReconciliation,
  PaymentReconciliationInvoice,
  PaymentReconciliationPayment,
  PaymentRequest,
  PaymentSchedule,
  PaymentTerm,
  PaymentTermsTemplate,
  PaymentTermsTemplateDetail,
  PeriodClosingVoucher,
  PosCustomerGroup,
  PosItemGroup,
  PosProfile,
  PosProfileUser,
  PosSetting,
  PricingRule,
  PurchaseInvoice,
  PurchaseInvoiceAdvance,
  PurchaseInvoiceItem,
  PurchaseTaxesAndCharge,
  PurchaseTaxesAndChargesTemplate,
  SalaryComponentAccount,
  SalesInvoice,
  SalesInvoiceAdvance,
  SalesInvoiceItem,
  SalesInvoicePayment,
  SalesInvoiceTimesheet,
  SalesTaxesAndCharge,
  SalesTaxesAndChargesTemplate,
  ShareBalance,
  ShareTransfer,
  ShareType,
  Shareholder,
  ShippingRule,
  ShippingRuleCondition,
  ShippingRuleCountry,
  Subscription,
  SubscriptionInvoice,
  SubscriptionPlan,
  SubscriptionPlanDetail,
  SubscriptionSetting,
  TaxCategory,
  TaxRule,
  TaxWithholdingAccount,
  TaxWithholdingCategory,
  TaxWithholdingRate,
  Asset,
  AssetCategory,
  AssetCategoryAccount,
  AssetFinanceBook,
  AssetMaintenance,
  AssetMaintenanceLog,
  AssetMaintenanceTask,
  AssetMaintenanceTeam,
  AssetMovement,
  AssetRepair,
  AssetSetting,
  AssetValueAdjustment,
  DepreciationSchedule,
  LinkedLocation,
  Location,
  MaintenanceTeamMember,
  AdditionalSalary,
  Appraisal,
  AppraisalGoal,
  Attendance,
  AttendanceRequest,
  Branch,
  CompensatoryLeaveRequest,
  DailyWorkSummary,
  DailyWorkSummaryGroup,
  DailyWorkSummaryGroupUser,
  Department,
  DepartmentApprover,
  Designation,
  Driver,
  DrivingLicenseCategory,
  Employee,
  EmployeeAdvance,
  EmployeeAttendanceTool,
  EmployeeBenefitApplication,
  EmployeeBenefitApplicationDetail,
  EmployeeBenefitClaim,
  EmployeeBoardingActivity,
  EmployeeEducation,
  EmployeeExternalWorkHistory,
  EmployeeGrade,
  EmployeeHealthInsurance,
  EmployeeIncentive,
  EmployeeInternalWorkHistory,
  EmployeeOnboarding,
  EmployeeOnboardingActivity,
  EmployeeOnboardingTemplate,
  EmployeePromotion,
  EmployeePropertyHistory,
  EmployeeSeparation,
  EmployeeSeparationTemplate,
  EmployeeTaxExemptionCategory,
  EmployeeTaxExemptionDeclaration,
  EmployeeTaxExemptionDeclarationCategory,
  EmployeeTaxExemptionProofSubmission,
  EmployeeTaxExemptionProofSubmissionDetail,
  EmployeeTaxExemptionSubCategory,
  EmployeeTransfer,
  EmployeeTransferProperty,
  EmploymentType,
  ExpenseClaim,
  ExpenseClaimAccount,
  ExpenseClaimAdvance,
  ExpenseClaimDetail,
  ExpenseClaimType,
  Holiday,
  HolidayList,
  HrSetting,
  IdentificationDocumentType,
  Interest,
  JobApplicant,
  JobApplicantSource,
  JobOffer,
  JobOfferTerm,
  JobOpening,
  LeaveAllocation,
  LeaveApplication,
  LeaveBlockList,
  LeaveBlockListAllow,
  LeaveBlockListDate,
  LeaveControlPanel,
  LeaveEncashment,
  LeavePeriod,
  LeavePolicy,
  LeavePolicyDetail,
  LeaveType,
  Loan,
  LoanApplication,
  LoanType,
  OfferTerm,
  PayrollEmployeeDetail,
  PayrollEntry,
  PayrollPeriod,
  PayrollPeriodDate,
  PurposeOfTravel,
  RepaymentSchedule,
  RetentionBonu,
  SalaryComponent,
  SalaryDetail,
  SalarySlip,
  SalarySlipLoan,
  SalarySlipTimesheet,
  SalaryStructure,
  SalaryStructureAssignment,
  ShiftAssignment,
  ShiftRequest,
  ShiftType,
  StaffingPlan,
  StaffingPlanDetail,
  TaxableSalarySlab,
  TrainingEvent,
  TrainingEventEmployee,
  TrainingFeedback,
  TrainingProgram,
  TrainingResult,
  TrainingResultEmployee,
  TravelItinerary,
  TravelRequest,
  TravelRequestCosting,
  UploadAttendance,
  Vehicle,
  VehicleLog,
  VehicleService,
  ActivityCost,
  ActivityType,
  DependentTask,
  Project,
  ProjectTask,
  ProjectTemplate,
  ProjectTemplateTask,
  ProjectType,
  ProjectUpdate,
  ProjectUser,
  ProjectsSetting,
  Task,
  TaskDependsOn,
  Timesheet,
  TimesheetDetail,
  
]

export const modelPool = {
accountingPeriods: AccountingPeriod,
  accountsSettings: AccountsSetting,
  allowedToTransactWiths: AllowedToTransactWith,
  banks: Bank,
  bankAccounts: BankAccount,
  bankGuarantees: BankGuarantee,
  bankReconciliations: BankReconciliation,
  bankReconciliationDetails: BankReconciliationDetail,
  bankStatementSettings: BankStatementSetting,
  bankStatementSettingsItems: BankStatementSettingsItem,
  bankStatementTransactionEntries: BankStatementTransactionEntry,
  bankStatementTransactionInvoiceItems: BankStatementTransactionInvoiceItem,
  bankStatementTransactionPaymentItems: BankStatementTransactionPaymentItem,
  bankStatementTransactionSettings: BankStatementTransactionSetting,
  bankStatementTransactionSettingsItems: BankStatementTransactionSettingsItem,
  budgets: Budget,
  budgetAccounts: BudgetAccount,
  cForms: CForm,
  cFormInvoiceDetails: CFormInvoiceDetail,
  cashFlowMappers: CashFlowMapper,
  cashFlowMappings: CashFlowMapping,
  cashFlowMappingAccounts: CashFlowMappingAccount,
  cashFlowMappingTemplates: CashFlowMappingTemplate,
  cashFlowMappingTemplateDetails: CashFlowMappingTemplateDetail,
  cashierClosings: CashierClosing,
  cashierClosingPayments: CashierClosingPayment,
  chequePrintTemplates: ChequePrintTemplate,
  closedDocuments: ClosedDocument,
  costCenters: CostCenter,
  exchangeRateRevaluations: ExchangeRateRevaluation,
  exchangeRateRevaluationAccounts: ExchangeRateRevaluationAccount,
  financeBooks: FinanceBook,
  fiscalYears: FiscalYear,
  fiscalYearCompanies: FiscalYearCompany,
  glEntries: GlEntry,
  gstAccounts: GstAccount,
  itemTaxTemplates: ItemTaxTemplate,
  itemTaxTemplateDetails: ItemTaxTemplateDetail,
  journalEntries: JournalEntry,
  journalEntryAccounts: JournalEntryAccount,
  loyaltyPointEntries: LoyaltyPointEntry,
  loyaltyPointEntryRedemptions: LoyaltyPointEntryRedemption,
  loyaltyPrograms: LoyaltyProgram,
  loyaltyProgramCollections: LoyaltyProgramCollection,
  modeOfPayments: ModeOfPayment,
  modeOfPaymentAccounts: ModeOfPaymentAccount,
  monthlyDistributions: MonthlyDistribution,
  monthlyDistributionPercentages: MonthlyDistributionPercentage,
  openingInvoiceCreationTools: OpeningInvoiceCreationTool,
  openingInvoiceCreationToolItems: OpeningInvoiceCreationToolItem,
  partyAccounts: PartyAccount,
  paymentEntries: PaymentEntry,
  paymentEntryDeductions: PaymentEntryDeduction,
  paymentEntryReferences: PaymentEntryReference,
  paymentGatewayAccounts: PaymentGatewayAccount,
  paymentOrders: PaymentOrder,
  paymentOrderReferences: PaymentOrderReference,
  paymentReconciliations: PaymentReconciliation,
  paymentReconciliationInvoices: PaymentReconciliationInvoice,
  paymentReconciliationPayments: PaymentReconciliationPayment,
  paymentRequests: PaymentRequest,
  paymentSchedules: PaymentSchedule,
  paymentTerms: PaymentTerm,
  paymentTermsTemplates: PaymentTermsTemplate,
  paymentTermsTemplateDetails: PaymentTermsTemplateDetail,
  periodClosingVouchers: PeriodClosingVoucher,
  posCustomerGroups: PosCustomerGroup,
  posItemGroups: PosItemGroup,
  posProfiles: PosProfile,
  posProfileUsers: PosProfileUser,
  posSettings: PosSetting,
  pricingRules: PricingRule,
  purchaseInvoices: PurchaseInvoice,
  purchaseInvoiceAdvances: PurchaseInvoiceAdvance,
  purchaseInvoiceItems: PurchaseInvoiceItem,
  purchaseTaxesAndCharges: PurchaseTaxesAndCharge,
  purchaseTaxesAndChargesTemplates: PurchaseTaxesAndChargesTemplate,
  salaryComponentAccounts: SalaryComponentAccount,
  salesInvoices: SalesInvoice,
  salesInvoiceAdvances: SalesInvoiceAdvance,
  salesInvoiceItems: SalesInvoiceItem,
  salesInvoicePayments: SalesInvoicePayment,
  salesInvoiceTimesheets: SalesInvoiceTimesheet,
  salesTaxesAndCharges: SalesTaxesAndCharge,
  salesTaxesAndChargesTemplates: SalesTaxesAndChargesTemplate,
  shareBalances: ShareBalance,
  shareTransfers: ShareTransfer,
  shareTypes: ShareType,
  shareholders: Shareholder,
  shippingRules: ShippingRule,
  shippingRuleConditions: ShippingRuleCondition,
  shippingRuleCountries: ShippingRuleCountry,
  subscriptions: Subscription,
  subscriptionInvoices: SubscriptionInvoice,
  subscriptionPlans: SubscriptionPlan,
  subscriptionPlanDetails: SubscriptionPlanDetail,
  subscriptionSettings: SubscriptionSetting,
  taxCategories: TaxCategory,
  taxRules: TaxRule,
  taxWithholdingAccounts: TaxWithholdingAccount,
  taxWithholdingCategories: TaxWithholdingCategory,
  taxWithholdingRates: TaxWithholdingRate,
  assets: Asset,
  assetCategories: AssetCategory,
  assetCategoryAccounts: AssetCategoryAccount,
  assetFinanceBooks: AssetFinanceBook,
  assetMaintenances: AssetMaintenance,
  assetMaintenanceLogs: AssetMaintenanceLog,
  assetMaintenanceTasks: AssetMaintenanceTask,
  assetMaintenanceTeams: AssetMaintenanceTeam,
  assetMovements: AssetMovement,
  assetRepairs: AssetRepair,
  assetSettings: AssetSetting,
  assetValueAdjustments: AssetValueAdjustment,
  depreciationSchedules: DepreciationSchedule,
  linkedLocations: LinkedLocation,
  locations: Location,
  maintenanceTeamMembers: MaintenanceTeamMember,
  additionalSalaries: AdditionalSalary,
  appraisals: Appraisal,
  appraisalGoals: AppraisalGoal,
  attendances: Attendance,
  attendanceRequests: AttendanceRequest,
  branches: Branch,
  compensatoryLeaveRequests: CompensatoryLeaveRequest,
  dailyWorkSummaries: DailyWorkSummary,
  dailyWorkSummaryGroups: DailyWorkSummaryGroup,
  dailyWorkSummaryGroupUsers: DailyWorkSummaryGroupUser,
  departments: Department,
  departmentApprovers: DepartmentApprover,
  designations: Designation,
  drivers: Driver,
  drivingLicenseCategories: DrivingLicenseCategory,
  employees: Employee,
  employeeAdvances: EmployeeAdvance,
  employeeAttendanceTools: EmployeeAttendanceTool,
  employeeBenefitApplications: EmployeeBenefitApplication,
  employeeBenefitApplicationDetails: EmployeeBenefitApplicationDetail,
  employeeBenefitClaims: EmployeeBenefitClaim,
  employeeBoardingActivities: EmployeeBoardingActivity,
  employeeEducations: EmployeeEducation,
  employeeExternalWorkHistories: EmployeeExternalWorkHistory,
  employeeGrades: EmployeeGrade,
  employeeHealthInsurances: EmployeeHealthInsurance,
  employeeIncentives: EmployeeIncentive,
  employeeInternalWorkHistories: EmployeeInternalWorkHistory,
  employeeOnboardings: EmployeeOnboarding,
  employeeOnboardingActivities: EmployeeOnboardingActivity,
  employeeOnboardingTemplates: EmployeeOnboardingTemplate,
  employeePromotions: EmployeePromotion,
  employeePropertyHistories: EmployeePropertyHistory,
  employeeSeparations: EmployeeSeparation,
  employeeSeparationTemplates: EmployeeSeparationTemplate,
  employeeTaxExemptionCategories: EmployeeTaxExemptionCategory,
  employeeTaxExemptionDeclarations: EmployeeTaxExemptionDeclaration,
  employeeTaxExemptionDeclarationCategories: EmployeeTaxExemptionDeclarationCategory,
  employeeTaxExemptionProofSubmissions: EmployeeTaxExemptionProofSubmission,
  employeeTaxExemptionProofSubmissionDetails: EmployeeTaxExemptionProofSubmissionDetail,
  employeeTaxExemptionSubCategories: EmployeeTaxExemptionSubCategory,
  employeeTransfers: EmployeeTransfer,
  employeeTransferProperties: EmployeeTransferProperty,
  employmentTypes: EmploymentType,
  expenseClaims: ExpenseClaim,
  expenseClaimAccounts: ExpenseClaimAccount,
  expenseClaimAdvances: ExpenseClaimAdvance,
  expenseClaimDetails: ExpenseClaimDetail,
  expenseClaimTypes: ExpenseClaimType,
  holidays: Holiday,
  holidayLists: HolidayList,
  hrSettings: HrSetting,
  identificationDocumentTypes: IdentificationDocumentType,
  interests: Interest,
  jobApplicants: JobApplicant,
  jobApplicantSources: JobApplicantSource,
  jobOffers: JobOffer,
  jobOfferTerms: JobOfferTerm,
  jobOpenings: JobOpening,
  leaveAllocations: LeaveAllocation,
  leaveApplications: LeaveApplication,
  leaveBlockLists: LeaveBlockList,
  leaveBlockListAllows: LeaveBlockListAllow,
  leaveBlockListDates: LeaveBlockListDate,
  leaveControlPanels: LeaveControlPanel,
  leaveEncashments: LeaveEncashment,
  leavePeriods: LeavePeriod,
  leavePolicies: LeavePolicy,
  leavePolicyDetails: LeavePolicyDetail,
  leaveTypes: LeaveType,
  loans: Loan,
  loanApplications: LoanApplication,
  loanTypes: LoanType,
  offerTerms: OfferTerm,
  payrollEmployeeDetails: PayrollEmployeeDetail,
  payrollEntries: PayrollEntry,
  payrollPeriods: PayrollPeriod,
  payrollPeriodDates: PayrollPeriodDate,
  purposeOfTravels: PurposeOfTravel,
  repaymentSchedules: RepaymentSchedule,
  retentionBonuses: RetentionBonu,
  salaryComponents: SalaryComponent,
  salaryDetails: SalaryDetail,
  salarySlips: SalarySlip,
  salarySlipLoans: SalarySlipLoan,
  salarySlipTimesheets: SalarySlipTimesheet,
  salaryStructures: SalaryStructure,
  salaryStructureAssignments: SalaryStructureAssignment,
  shiftAssignments: ShiftAssignment,
  shiftRequests: ShiftRequest,
  shiftTypes: ShiftType,
  staffingPlans: StaffingPlan,
  staffingPlanDetails: StaffingPlanDetail,
  taxableSalarySlabs: TaxableSalarySlab,
  trainingEvents: TrainingEvent,
  trainingEventEmployees: TrainingEventEmployee,
  trainingFeedbacks: TrainingFeedback,
  trainingPrograms: TrainingProgram,
  trainingResults: TrainingResult,
  trainingResultEmployees: TrainingResultEmployee,
  travelItineraries: TravelItinerary,
  travelRequests: TravelRequest,
  travelRequestCostings: TravelRequestCosting,
  uploadAttendances: UploadAttendance,
  vehicles: Vehicle,
  vehicleLogs: VehicleLog,
  vehicleServices: VehicleService,
  activityCosts: ActivityCost,
  activityTypes: ActivityType,
  dependentTasks: DependentTask,
  projects: Project,
  projectTasks: ProjectTask,
  projectTemplates: ProjectTemplate,
  projectTemplateTasks: ProjectTemplateTask,
  projectTypes: ProjectType,
  projectUpdates: ProjectUpdate,
  projectUsers: ProjectUser,
  projectsSettings: ProjectsSetting,
  tasks: Task,
  taskDependsOns: TaskDependsOn,
  timesheets: Timesheet,
  timesheetDetails: TimesheetDetail,
  
}