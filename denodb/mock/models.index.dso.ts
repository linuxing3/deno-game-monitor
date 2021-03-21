// loop for import list

import { AccountingPeriod } from './ERPModel/accounts/accounting_period/accountingPeriods.model.dso.ts';

import { AccountsSetting } from './ERPModel/accounts/accounts_settings/accountsSettings.model.dso.ts';

import { AllowedToTransactWith } from './ERPModel/accounts/allowed_to_transact_with/allowedToTransactWiths.model.dso.ts';

import { Bank } from './ERPModel/accounts/bank/banks.model.dso.ts';

import { BankAccount } from './ERPModel/accounts/bank_account/bankAccounts.model.dso.ts';

import { BankGuarantee } from './ERPModel/accounts/bank_guarantee/bankGuarantees.model.dso.ts';

import { BankReconciliation } from './ERPModel/accounts/bank_reconciliation/bankReconciliations.model.dso.ts';

import { BankReconciliationDetail } from './ERPModel/accounts/bank_reconciliation_detail/bankReconciliationDetails.model.dso.ts';

import { BankStatementSetting } from './ERPModel/accounts/bank_statement_settings/bankStatementSettings.model.dso.ts';

import { BankStatementSettingsItem } from './ERPModel/accounts/bank_statement_settings_item/bankStatementSettingsItems.model.dso.ts';

import { BankStatementTransactionEntry } from './ERPModel/accounts/bank_statement_transaction_entry/bankStatementTransactionEntries.model.dso.ts';

import { BankStatementTransactionInvoiceItem } from './ERPModel/accounts/bank_statement_transaction_invoice_item/bankStatementTransactionInvoiceItems.model.dso.ts';

import { BankStatementTransactionPaymentItem } from './ERPModel/accounts/bank_statement_transaction_payment_item/bankStatementTransactionPaymentItems.model.dso.ts';

import { BankStatementTransactionSetting } from './ERPModel/accounts/bank_statement_transaction_settings/bankStatementTransactionSettings.model.dso.ts';

import { BankStatementTransactionSettingsItem } from './ERPModel/accounts/bank_statement_transaction_settings_item/bankStatementTransactionSettingsItems.model.dso.ts';

import { Budget } from './ERPModel/accounts/budget/budgets.model.dso.ts';

import { BudgetAccount } from './ERPModel/accounts/budget_account/budgetAccounts.model.dso.ts';

import { CForm } from './ERPModel/accounts/c_form/cForms.model.dso.ts';

import { CFormInvoiceDetail } from './ERPModel/accounts/c_form_invoice_detail/cFormInvoiceDetails.model.dso.ts';

import { CashFlowMapper } from './ERPModel/accounts/cash_flow_mapper/cashFlowMappers.model.dso.ts';

import { CashFlowMapping } from './ERPModel/accounts/cash_flow_mapping/cashFlowMappings.model.dso.ts';

import { CashFlowMappingAccount } from './ERPModel/accounts/cash_flow_mapping_accounts/cashFlowMappingAccounts.model.dso.ts';

import { CashFlowMappingTemplate } from './ERPModel/accounts/cash_flow_mapping_template/cashFlowMappingTemplates.model.dso.ts';

import { CashFlowMappingTemplateDetail } from './ERPModel/accounts/cash_flow_mapping_template_details/cashFlowMappingTemplateDetails.model.dso.ts';

import { CashierClosing } from './ERPModel/accounts/cashier_closing/cashierClosings.model.dso.ts';

import { CashierClosingPayment } from './ERPModel/accounts/cashier_closing_payments/cashierClosingPayments.model.dso.ts';

import { ChequePrintTemplate } from './ERPModel/accounts/cheque_print_template/chequePrintTemplates.model.dso.ts';

import { ClosedDocument } from './ERPModel/accounts/closed_document/closedDocuments.model.dso.ts';

import { CostCenter } from './ERPModel/accounts/cost_center/costCenters.model.dso.ts';

import { ExchangeRateRevaluation } from './ERPModel/accounts/exchange_rate_revaluation/exchangeRateRevaluations.model.dso.ts';

import { ExchangeRateRevaluationAccount } from './ERPModel/accounts/exchange_rate_revaluation_account/exchangeRateRevaluationAccounts.model.dso.ts';

import { FinanceBook } from './ERPModel/accounts/finance_book/financeBooks.model.dso.ts';

import { FiscalYear } from './ERPModel/accounts/fiscal_year/fiscalYears.model.dso.ts';

import { FiscalYearCompany } from './ERPModel/accounts/fiscal_year_company/fiscalYearCompanies.model.dso.ts';

import { GlEntry } from './ERPModel/accounts/gl_entry/glEntries.model.dso.ts';

import { GstAccount } from './ERPModel/accounts/gst_account/gstAccounts.model.dso.ts';

import { ItemTaxTemplate } from './ERPModel/accounts/item_tax_template/itemTaxTemplates.model.dso.ts';

import { ItemTaxTemplateDetail } from './ERPModel/accounts/item_tax_template_detail/itemTaxTemplateDetails.model.dso.ts';

import { JournalEntry } from './ERPModel/accounts/journal_entry/journalEntries.model.dso.ts';

import { JournalEntryAccount } from './ERPModel/accounts/journal_entry_account/journalEntryAccounts.model.dso.ts';

import { LoyaltyPointEntry } from './ERPModel/accounts/loyalty_point_entry/loyaltyPointEntries.model.dso.ts';

import { LoyaltyPointEntryRedemption } from './ERPModel/accounts/loyalty_point_entry_redemption/loyaltyPointEntryRedemptions.model.dso.ts';

import { LoyaltyProgram } from './ERPModel/accounts/loyalty_program/loyaltyPrograms.model.dso.ts';

import { LoyaltyProgramCollection } from './ERPModel/accounts/loyalty_program_collection/loyaltyProgramCollections.model.dso.ts';

import { ModeOfPayment } from './ERPModel/accounts/mode_of_payment/modeOfPayments.model.dso.ts';

import { ModeOfPaymentAccount } from './ERPModel/accounts/mode_of_payment_account/modeOfPaymentAccounts.model.dso.ts';

import { MonthlyDistribution } from './ERPModel/accounts/monthly_distribution/monthlyDistributions.model.dso.ts';

import { MonthlyDistributionPercentage } from './ERPModel/accounts/monthly_distribution_percentage/monthlyDistributionPercentages.model.dso.ts';

import { OpeningInvoiceCreationTool } from './ERPModel/accounts/opening_invoice_creation_tool/openingInvoiceCreationTools.model.dso.ts';

import { OpeningInvoiceCreationToolItem } from './ERPModel/accounts/opening_invoice_creation_tool_item/openingInvoiceCreationToolItems.model.dso.ts';

import { PartyAccount } from './ERPModel/accounts/party_account/partyAccounts.model.dso.ts';

import { PaymentEntry } from './ERPModel/accounts/payment_entry/paymentEntries.model.dso.ts';

import { PaymentEntryDeduction } from './ERPModel/accounts/payment_entry_deduction/paymentEntryDeductions.model.dso.ts';

import { PaymentEntryReference } from './ERPModel/accounts/payment_entry_reference/paymentEntryReferences.model.dso.ts';

import { PaymentGatewayAccount } from './ERPModel/accounts/payment_gateway_account/paymentGatewayAccounts.model.dso.ts';

import { PaymentOrder } from './ERPModel/accounts/payment_order/paymentOrders.model.dso.ts';

import { PaymentOrderReference } from './ERPModel/accounts/payment_order_reference/paymentOrderReferences.model.dso.ts';

import { PaymentReconciliation } from './ERPModel/accounts/payment_reconciliation/paymentReconciliations.model.dso.ts';

import { PaymentReconciliationInvoice } from './ERPModel/accounts/payment_reconciliation_invoice/paymentReconciliationInvoices.model.dso.ts';

import { PaymentReconciliationPayment } from './ERPModel/accounts/payment_reconciliation_payment/paymentReconciliationPayments.model.dso.ts';

import { PaymentRequest } from './ERPModel/accounts/payment_request/paymentRequests.model.dso.ts';

import { PaymentSchedule } from './ERPModel/accounts/payment_schedule/paymentSchedules.model.dso.ts';

import { PaymentTerm } from './ERPModel/accounts/payment_term/paymentTerms.model.dso.ts';

import { PaymentTermsTemplate } from './ERPModel/accounts/payment_terms_template/paymentTermsTemplates.model.dso.ts';

import { PaymentTermsTemplateDetail } from './ERPModel/accounts/payment_terms_template_detail/paymentTermsTemplateDetails.model.dso.ts';

import { PeriodClosingVoucher } from './ERPModel/accounts/period_closing_voucher/periodClosingVouchers.model.dso.ts';

import { PosCustomerGroup } from './ERPModel/accounts/pos_customer_group/posCustomerGroups.model.dso.ts';

import { PosItemGroup } from './ERPModel/accounts/pos_item_group/posItemGroups.model.dso.ts';

import { PosProfile } from './ERPModel/accounts/pos_profile/posProfiles.model.dso.ts';

import { PosProfileUser } from './ERPModel/accounts/pos_profile_user/posProfileUsers.model.dso.ts';

import { PosSetting } from './ERPModel/accounts/pos_settings/posSettings.model.dso.ts';

import { PricingRule } from './ERPModel/accounts/pricing_rule/pricingRules.model.dso.ts';

import { PurchaseInvoice } from './ERPModel/accounts/purchase_invoice/purchaseInvoices.model.dso.ts';

import { PurchaseInvoiceAdvance } from './ERPModel/accounts/purchase_invoice_advance/purchaseInvoiceAdvances.model.dso.ts';

import { PurchaseInvoiceItem } from './ERPModel/accounts/purchase_invoice_item/purchaseInvoiceItems.model.dso.ts';

import { PurchaseTaxesAndCharge } from './ERPModel/accounts/purchase_taxes_and_charges/purchaseTaxesAndCharges.model.dso.ts';

import { PurchaseTaxesAndChargesTemplate } from './ERPModel/accounts/purchase_taxes_and_charges_template/purchaseTaxesAndChargesTemplates.model.dso.ts';

import { SalaryComponentAccount } from './ERPModel/accounts/salary_component_account/salaryComponentAccounts.model.dso.ts';

import { SalesInvoice } from './ERPModel/accounts/sales_invoice/salesInvoices.model.dso.ts';

import { SalesInvoiceAdvance } from './ERPModel/accounts/sales_invoice_advance/salesInvoiceAdvances.model.dso.ts';

import { SalesInvoiceItem } from './ERPModel/accounts/sales_invoice_item/salesInvoiceItems.model.dso.ts';

import { SalesInvoicePayment } from './ERPModel/accounts/sales_invoice_payment/salesInvoicePayments.model.dso.ts';

import { SalesInvoiceTimesheet } from './ERPModel/accounts/sales_invoice_timesheet/salesInvoiceTimesheets.model.dso.ts';

import { SalesTaxesAndCharge } from './ERPModel/accounts/sales_taxes_and_charges/salesTaxesAndCharges.model.dso.ts';

import { SalesTaxesAndChargesTemplate } from './ERPModel/accounts/sales_taxes_and_charges_template/salesTaxesAndChargesTemplates.model.dso.ts';

import { ShareBalance } from './ERPModel/accounts/share_balance/shareBalances.model.dso.ts';

import { ShareTransfer } from './ERPModel/accounts/share_transfer/shareTransfers.model.dso.ts';

import { ShareType } from './ERPModel/accounts/share_type/shareTypes.model.dso.ts';

import { Shareholder } from './ERPModel/accounts/shareholder/shareholders.model.dso.ts';

import { ShippingRule } from './ERPModel/accounts/shipping_rule/shippingRules.model.dso.ts';

import { ShippingRuleCondition } from './ERPModel/accounts/shipping_rule_condition/shippingRuleConditions.model.dso.ts';

import { ShippingRuleCountry } from './ERPModel/accounts/shipping_rule_country/shippingRuleCountries.model.dso.ts';

import { Subscription } from './ERPModel/accounts/subscription/subscriptions.model.dso.ts';

import { SubscriptionInvoice } from './ERPModel/accounts/subscription_invoice/subscriptionInvoices.model.dso.ts';

import { SubscriptionPlan } from './ERPModel/accounts/subscription_plan/subscriptionPlans.model.dso.ts';

import { SubscriptionPlanDetail } from './ERPModel/accounts/subscription_plan_detail/subscriptionPlanDetails.model.dso.ts';

import { SubscriptionSetting } from './ERPModel/accounts/subscription_settings/subscriptionSettings.model.dso.ts';

import { TaxCategory } from './ERPModel/accounts/tax_category/taxCategories.model.dso.ts';

import { TaxRule } from './ERPModel/accounts/tax_rule/taxRules.model.dso.ts';

import { TaxWithholdingAccount } from './ERPModel/accounts/tax_withholding_account/taxWithholdingAccounts.model.dso.ts';

import { TaxWithholdingCategory } from './ERPModel/accounts/tax_withholding_category/taxWithholdingCategories.model.dso.ts';

import { TaxWithholdingRate } from './ERPModel/accounts/tax_withholding_rate/taxWithholdingRates.model.dso.ts';

import { Asset } from './ERPModel/assets/asset/assets.model.dso.ts';

import { AssetCategory } from './ERPModel/assets/asset_category/assetCategories.model.dso.ts';

import { AssetCategoryAccount } from './ERPModel/assets/asset_category_account/assetCategoryAccounts.model.dso.ts';

import { AssetFinanceBook } from './ERPModel/assets/asset_finance_book/assetFinanceBooks.model.dso.ts';

import { AssetMaintenance } from './ERPModel/assets/asset_maintenance/assetMaintenances.model.dso.ts';

import { AssetMaintenanceLog } from './ERPModel/assets/asset_maintenance_log/assetMaintenanceLogs.model.dso.ts';

import { AssetMaintenanceTask } from './ERPModel/assets/asset_maintenance_task/assetMaintenanceTasks.model.dso.ts';

import { AssetMaintenanceTeam } from './ERPModel/assets/asset_maintenance_team/assetMaintenanceTeams.model.dso.ts';

import { AssetMovement } from './ERPModel/assets/asset_movement/assetMovements.model.dso.ts';

import { AssetRepair } from './ERPModel/assets/asset_repair/assetRepairs.model.dso.ts';

import { AssetSetting } from './ERPModel/assets/asset_settings/assetSettings.model.dso.ts';

import { AssetValueAdjustment } from './ERPModel/assets/asset_value_adjustment/assetValueAdjustments.model.dso.ts';

import { DepreciationSchedule } from './ERPModel/assets/depreciation_schedule/depreciationSchedules.model.dso.ts';

import { LinkedLocation } from './ERPModel/assets/linked_location/linkedLocations.model.dso.ts';

import { Location } from './ERPModel/assets/location/locations.model.dso.ts';

import { MaintenanceTeamMember } from './ERPModel/assets/maintenance_team_member/maintenanceTeamMembers.model.dso.ts';

import { AdditionalSalary } from './ERPModel/hr/additional_salary/additionalSalaries.model.dso.ts';

import { Appraisal } from './ERPModel/hr/appraisal/appraisals.model.dso.ts';

import { AppraisalGoal } from './ERPModel/hr/appraisal_goal/appraisalGoals.model.dso.ts';

import { Attendance } from './ERPModel/hr/attendance/attendances.model.dso.ts';

import { AttendanceRequest } from './ERPModel/hr/attendance_request/attendanceRequests.model.dso.ts';

import { Branch } from './ERPModel/hr/branch/branches.model.dso.ts';

import { CompensatoryLeaveRequest } from './ERPModel/hr/compensatory_leave_request/compensatoryLeaveRequests.model.dso.ts';

import { DailyWorkSummary } from './ERPModel/hr/daily_work_summary/dailyWorkSummaries.model.dso.ts';

import { DailyWorkSummaryGroup } from './ERPModel/hr/daily_work_summary_group/dailyWorkSummaryGroups.model.dso.ts';

import { DailyWorkSummaryGroupUser } from './ERPModel/hr/daily_work_summary_group_user/dailyWorkSummaryGroupUsers.model.dso.ts';

import { Department } from './ERPModel/hr/department/departments.model.dso.ts';

import { DepartmentApprover } from './ERPModel/hr/department_approver/departmentApprovers.model.dso.ts';

import { Designation } from './ERPModel/hr/designation/designations.model.dso.ts';

import { Driver } from './ERPModel/hr/driver/drivers.model.dso.ts';

import { DrivingLicenseCategory } from './ERPModel/hr/driving_license_category/drivingLicenseCategories.model.dso.ts';

import { Employee } from './ERPModel/hr/employee/employees.model.dso.ts';

import { EmployeeAdvance } from './ERPModel/hr/employee_advance/employeeAdvances.model.dso.ts';

import { EmployeeAttendanceTool } from './ERPModel/hr/employee_attendance_tool/employeeAttendanceTools.model.dso.ts';

import { EmployeeBenefitApplication } from './ERPModel/hr/employee_benefit_application/employeeBenefitApplications.model.dso.ts';

import { EmployeeBenefitApplicationDetail } from './ERPModel/hr/employee_benefit_application_detail/employeeBenefitApplicationDetails.model.dso.ts';

import { EmployeeBenefitClaim } from './ERPModel/hr/employee_benefit_claim/employeeBenefitClaims.model.dso.ts';

import { EmployeeBoardingActivity } from './ERPModel/hr/employee_boarding_activity/employeeBoardingActivities.model.dso.ts';

import { EmployeeEducation } from './ERPModel/hr/employee_education/employeeEducations.model.dso.ts';

import { EmployeeExternalWorkHistory } from './ERPModel/hr/employee_external_work_history/employeeExternalWorkHistories.model.dso.ts';

import { EmployeeGrade } from './ERPModel/hr/employee_grade/employeeGrades.model.dso.ts';

import { EmployeeHealthInsurance } from './ERPModel/hr/employee_health_insurance/employeeHealthInsurances.model.dso.ts';

import { EmployeeIncentive } from './ERPModel/hr/employee_incentive/employeeIncentives.model.dso.ts';

import { EmployeeInternalWorkHistory } from './ERPModel/hr/employee_internal_work_history/employeeInternalWorkHistories.model.dso.ts';

import { EmployeeOnboarding } from './ERPModel/hr/employee_onboarding/employeeOnboardings.model.dso.ts';

import { EmployeeOnboardingActivity } from './ERPModel/hr/employee_onboarding_activity/employeeOnboardingActivities.model.dso.ts';

import { EmployeeOnboardingTemplate } from './ERPModel/hr/employee_onboarding_template/employeeOnboardingTemplates.model.dso.ts';

import { EmployeePromotion } from './ERPModel/hr/employee_promotion/employeePromotions.model.dso.ts';

import { EmployeePropertyHistory } from './ERPModel/hr/employee_property_history/employeePropertyHistories.model.dso.ts';

import { EmployeeSeparation } from './ERPModel/hr/employee_separation/employeeSeparations.model.dso.ts';

import { EmployeeSeparationTemplate } from './ERPModel/hr/employee_separation_template/employeeSeparationTemplates.model.dso.ts';

import { EmployeeTaxExemptionCategory } from './ERPModel/hr/employee_tax_exemption_category/employeeTaxExemptionCategories.model.dso.ts';

import { EmployeeTaxExemptionDeclaration } from './ERPModel/hr/employee_tax_exemption_declaration/employeeTaxExemptionDeclarations.model.dso.ts';

import { EmployeeTaxExemptionDeclarationCategory } from './ERPModel/hr/employee_tax_exemption_declaration_category/employeeTaxExemptionDeclarationCategories.model.dso.ts';

import { EmployeeTaxExemptionProofSubmission } from './ERPModel/hr/employee_tax_exemption_proof_submission/employeeTaxExemptionProofSubmissions.model.dso.ts';

import { EmployeeTaxExemptionProofSubmissionDetail } from './ERPModel/hr/employee_tax_exemption_proof_submission_detail/employeeTaxExemptionProofSubmissionDetails.model.dso.ts';

import { EmployeeTaxExemptionSubCategory } from './ERPModel/hr/employee_tax_exemption_sub_category/employeeTaxExemptionSubCategories.model.dso.ts';

import { EmployeeTransfer } from './ERPModel/hr/employee_transfer/employeeTransfers.model.dso.ts';

import { EmployeeTransferProperty } from './ERPModel/hr/employee_transfer_property/employeeTransferProperties.model.dso.ts';

import { EmploymentType } from './ERPModel/hr/employment_type/employmentTypes.model.dso.ts';

import { ExpenseClaim } from './ERPModel/hr/expense_claim/expenseClaims.model.dso.ts';

import { ExpenseClaimAccount } from './ERPModel/hr/expense_claim_account/expenseClaimAccounts.model.dso.ts';

import { ExpenseClaimAdvance } from './ERPModel/hr/expense_claim_advance/expenseClaimAdvances.model.dso.ts';

import { ExpenseClaimDetail } from './ERPModel/hr/expense_claim_detail/expenseClaimDetails.model.dso.ts';

import { ExpenseClaimType } from './ERPModel/hr/expense_claim_type/expenseClaimTypes.model.dso.ts';

import { Holiday } from './ERPModel/hr/holiday/holidays.model.dso.ts';

import { HolidayList } from './ERPModel/hr/holiday_list/holidayLists.model.dso.ts';

import { HrSetting } from './ERPModel/hr/hr_settings/hrSettings.model.dso.ts';

import { IdentificationDocumentType } from './ERPModel/hr/identification_document_type/identificationDocumentTypes.model.dso.ts';

import { Interest } from './ERPModel/hr/interest/interests.model.dso.ts';

import { JobApplicant } from './ERPModel/hr/job_applicant/jobApplicants.model.dso.ts';

import { JobApplicantSource } from './ERPModel/hr/job_applicant_source/jobApplicantSources.model.dso.ts';

import { JobOffer } from './ERPModel/hr/job_offer/jobOffers.model.dso.ts';

import { JobOfferTerm } from './ERPModel/hr/job_offer_term/jobOfferTerms.model.dso.ts';

import { JobOpening } from './ERPModel/hr/job_opening/jobOpenings.model.dso.ts';

import { LeaveAllocation } from './ERPModel/hr/leave_allocation/leaveAllocations.model.dso.ts';

import { LeaveApplication } from './ERPModel/hr/leave_application/leaveApplications.model.dso.ts';

import { LeaveBlockList } from './ERPModel/hr/leave_block_list/leaveBlockLists.model.dso.ts';

import { LeaveBlockListAllow } from './ERPModel/hr/leave_block_list_allow/leaveBlockListAllows.model.dso.ts';

import { LeaveBlockListDate } from './ERPModel/hr/leave_block_list_date/leaveBlockListDates.model.dso.ts';

import { LeaveControlPanel } from './ERPModel/hr/leave_control_panel/leaveControlPanels.model.dso.ts';

import { LeaveEncashment } from './ERPModel/hr/leave_encashment/leaveEncashments.model.dso.ts';

import { LeavePeriod } from './ERPModel/hr/leave_period/leavePeriods.model.dso.ts';

import { LeavePolicy } from './ERPModel/hr/leave_policy/leavePolicies.model.dso.ts';

import { LeavePolicyDetail } from './ERPModel/hr/leave_policy_detail/leavePolicyDetails.model.dso.ts';

import { LeaveType } from './ERPModel/hr/leave_type/leaveTypes.model.dso.ts';

import { Loan } from './ERPModel/hr/loan/loans.model.dso.ts';

import { LoanApplication } from './ERPModel/hr/loan_application/loanApplications.model.dso.ts';

import { LoanType } from './ERPModel/hr/loan_type/loanTypes.model.dso.ts';

import { OfferTerm } from './ERPModel/hr/offer_term/offerTerms.model.dso.ts';

import { PayrollEmployeeDetail } from './ERPModel/hr/payroll_employee_detail/payrollEmployeeDetails.model.dso.ts';

import { PayrollEntry } from './ERPModel/hr/payroll_entry/payrollEntries.model.dso.ts';

import { PayrollPeriod } from './ERPModel/hr/payroll_period/payrollPeriods.model.dso.ts';

import { PayrollPeriodDate } from './ERPModel/hr/payroll_period_date/payrollPeriodDates.model.dso.ts';

import { PurposeOfTravel } from './ERPModel/hr/purpose_of_travel/purposeOfTravels.model.dso.ts';

import { RepaymentSchedule } from './ERPModel/hr/repayment_schedule/repaymentSchedules.model.dso.ts';

import { RetentionBonu } from './ERPModel/hr/retention_bonus/retentionBonuses.model.dso.ts';

import { SalaryComponent } from './ERPModel/hr/salary_component/salaryComponents.model.dso.ts';

import { SalaryDetail } from './ERPModel/hr/salary_detail/salaryDetails.model.dso.ts';

import { SalarySlip } from './ERPModel/hr/salary_slip/salarySlips.model.dso.ts';

import { SalarySlipLoan } from './ERPModel/hr/salary_slip_loan/salarySlipLoans.model.dso.ts';

import { SalarySlipTimesheet } from './ERPModel/hr/salary_slip_timesheet/salarySlipTimesheets.model.dso.ts';

import { SalaryStructure } from './ERPModel/hr/salary_structure/salaryStructures.model.dso.ts';

import { SalaryStructureAssignment } from './ERPModel/hr/salary_structure_assignment/salaryStructureAssignments.model.dso.ts';

import { ShiftAssignment } from './ERPModel/hr/shift_assignment/shiftAssignments.model.dso.ts';

import { ShiftRequest } from './ERPModel/hr/shift_request/shiftRequests.model.dso.ts';

import { ShiftType } from './ERPModel/hr/shift_type/shiftTypes.model.dso.ts';

import { StaffingPlan } from './ERPModel/hr/staffing_plan/staffingPlans.model.dso.ts';

import { StaffingPlanDetail } from './ERPModel/hr/staffing_plan_detail/staffingPlanDetails.model.dso.ts';

import { TaxableSalarySlab } from './ERPModel/hr/taxable_salary_slab/taxableSalarySlabs.model.dso.ts';

import { TrainingEvent } from './ERPModel/hr/training_event/trainingEvents.model.dso.ts';

import { TrainingEventEmployee } from './ERPModel/hr/training_event_employee/trainingEventEmployees.model.dso.ts';

import { TrainingFeedback } from './ERPModel/hr/training_feedback/trainingFeedbacks.model.dso.ts';

import { TrainingProgram } from './ERPModel/hr/training_program/trainingPrograms.model.dso.ts';

import { TrainingResult } from './ERPModel/hr/training_result/trainingResults.model.dso.ts';

import { TrainingResultEmployee } from './ERPModel/hr/training_result_employee/trainingResultEmployees.model.dso.ts';

import { TravelItinerary } from './ERPModel/hr/travel_itinerary/travelItineraries.model.dso.ts';

import { TravelRequest } from './ERPModel/hr/travel_request/travelRequests.model.dso.ts';

import { TravelRequestCosting } from './ERPModel/hr/travel_request_costing/travelRequestCostings.model.dso.ts';

import { UploadAttendance } from './ERPModel/hr/upload_attendance/uploadAttendances.model.dso.ts';

import { Vehicle } from './ERPModel/hr/vehicle/vehicles.model.dso.ts';

import { VehicleLog } from './ERPModel/hr/vehicle_log/vehicleLogs.model.dso.ts';

import { VehicleService } from './ERPModel/hr/vehicle_service/vehicleServices.model.dso.ts';

import { ActivityCost } from './ERPModel/projects/activity_cost/activityCosts.model.dso.ts';

import { ActivityType } from './ERPModel/projects/activity_type/activityTypes.model.dso.ts';

import { DependentTask } from './ERPModel/projects/dependent_task/dependentTasks.model.dso.ts';

import { Project } from './ERPModel/projects/project/projects.model.dso.ts';

import { ProjectTask } from './ERPModel/projects/project_task/projectTasks.model.dso.ts';

import { ProjectTemplate } from './ERPModel/projects/project_template/projectTemplates.model.dso.ts';

import { ProjectTemplateTask } from './ERPModel/projects/project_template_task/projectTemplateTasks.model.dso.ts';

import { ProjectType } from './ERPModel/projects/project_type/projectTypes.model.dso.ts';

import { ProjectUpdate } from './ERPModel/projects/project_update/projectUpdates.model.dso.ts';

import { ProjectUser } from './ERPModel/projects/project_user/projectUsers.model.dso.ts';

import { ProjectsSetting } from './ERPModel/projects/projects_settings/projectsSettings.model.dso.ts';

import { Task } from './ERPModel/projects/task/tasks.model.dso.ts';

import { TaskDependsOn } from './ERPModel/projects/task_depends_on/taskDependsOns.model.dso.ts';

import { Timesheet } from './ERPModel/projects/timesheet/timesheets.model.dso.ts';

import { TimesheetDetail } from './ERPModel/projects/timesheet_detail/timesheetDetails.model.dso.ts';


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