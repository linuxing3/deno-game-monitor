// loop for import list

import { AccountingPeriod } from './ERPModel/accounts/accounting_period/accountingPeriods.model.denodb.ts';

import { AccountsSetting } from './ERPModel/accounts/accounts_settings/accountsSettings.model.denodb.ts';

import { AllowedToTransactWith } from './ERPModel/accounts/allowed_to_transact_with/allowedToTransactWiths.model.denodb.ts';

import { Bank } from './ERPModel/accounts/bank/banks.model.denodb.ts';

import { BankAccount } from './ERPModel/accounts/bank_account/bankAccounts.model.denodb.ts';

import { BankGuarantee } from './ERPModel/accounts/bank_guarantee/bankGuarantees.model.denodb.ts';

import { BankReconciliation } from './ERPModel/accounts/bank_reconciliation/bankReconciliations.model.denodb.ts';

import { BankReconciliationDetail } from './ERPModel/accounts/bank_reconciliation_detail/bankReconciliationDetails.model.denodb.ts';

import { BankStatementSetting } from './ERPModel/accounts/bank_statement_settings/bankStatementSettings.model.denodb.ts';

import { BankStatementSettingsItem } from './ERPModel/accounts/bank_statement_settings_item/bankStatementSettingsItems.model.denodb.ts';

import { BankStatementTransactionEntry } from './ERPModel/accounts/bank_statement_transaction_entry/bankStatementTransactionEntries.model.denodb.ts';

import { BankStatementTransactionInvoiceItem } from './ERPModel/accounts/bank_statement_transaction_invoice_item/bankStatementTransactionInvoiceItems.model.denodb.ts';

import { BankStatementTransactionPaymentItem } from './ERPModel/accounts/bank_statement_transaction_payment_item/bankStatementTransactionPaymentItems.model.denodb.ts';

import { BankStatementTransactionSetting } from './ERPModel/accounts/bank_statement_transaction_settings/bankStatementTransactionSettings.model.denodb.ts';

import { BankStatementTransactionSettingsItem } from './ERPModel/accounts/bank_statement_transaction_settings_item/bankStatementTransactionSettingsItems.model.denodb.ts';

import { Budget } from './ERPModel/accounts/budget/budgets.model.denodb.ts';

import { BudgetAccount } from './ERPModel/accounts/budget_account/budgetAccounts.model.denodb.ts';

import { CashierClosing } from './ERPModel/accounts/cashier_closing/cashierClosings.model.denodb.ts';

import { CashierClosingPayment } from './ERPModel/accounts/cashier_closing_payments/cashierClosingPayments.model.denodb.ts';

import { CashFlowMapper } from './ERPModel/accounts/cash_flow_mapper/cashFlowMappers.model.denodb.ts';

import { CashFlowMapping } from './ERPModel/accounts/cash_flow_mapping/cashFlowMappings.model.denodb.ts';

import { CashFlowMappingAccount } from './ERPModel/accounts/cash_flow_mapping_accounts/cashFlowMappingAccounts.model.denodb.ts';

import { CashFlowMappingTemplate } from './ERPModel/accounts/cash_flow_mapping_template/cashFlowMappingTemplates.model.denodb.ts';

import { CashFlowMappingTemplateDetail } from './ERPModel/accounts/cash_flow_mapping_template_details/cashFlowMappingTemplateDetails.model.denodb.ts';

import { ChequePrintTemplate } from './ERPModel/accounts/cheque_print_template/chequePrintTemplates.model.denodb.ts';

import { ClosedDocument } from './ERPModel/accounts/closed_document/closedDocuments.model.denodb.ts';

import { CostCenter } from './ERPModel/accounts/cost_center/costCenters.model.denodb.ts';

import { CForm } from './ERPModel/accounts/c_form/cForms.model.denodb.ts';

import { CFormInvoiceDetail } from './ERPModel/accounts/c_form_invoice_detail/cFormInvoiceDetails.model.denodb.ts';

import { ExchangeRateRevaluation } from './ERPModel/accounts/exchange_rate_revaluation/exchangeRateRevaluations.model.denodb.ts';

import { ExchangeRateRevaluationAccount } from './ERPModel/accounts/exchange_rate_revaluation_account/exchangeRateRevaluationAccounts.model.denodb.ts';

import { FinanceBook } from './ERPModel/accounts/finance_book/financeBooks.model.denodb.ts';

import { FiscalYear } from './ERPModel/accounts/fiscal_year/fiscalYears.model.denodb.ts';

import { FiscalYearCompany } from './ERPModel/accounts/fiscal_year_company/fiscalYearCompanies.model.denodb.ts';

import { GlEntry } from './ERPModel/accounts/gl_entry/glEntries.model.denodb.ts';

import { GstAccount } from './ERPModel/accounts/gst_account/gstAccounts.model.denodb.ts';

import { ItemTaxTemplate } from './ERPModel/accounts/item_tax_template/itemTaxTemplates.model.denodb.ts';

import { ItemTaxTemplateDetail } from './ERPModel/accounts/item_tax_template_detail/itemTaxTemplateDetails.model.denodb.ts';

import { JournalEntry } from './ERPModel/accounts/journal_entry/journalEntries.model.denodb.ts';

import { JournalEntryAccount } from './ERPModel/accounts/journal_entry_account/journalEntryAccounts.model.denodb.ts';

import { LoyaltyPointEntry } from './ERPModel/accounts/loyalty_point_entry/loyaltyPointEntries.model.denodb.ts';

import { LoyaltyPointEntryRedemption } from './ERPModel/accounts/loyalty_point_entry_redemption/loyaltyPointEntryRedemptions.model.denodb.ts';

import { LoyaltyProgram } from './ERPModel/accounts/loyalty_program/loyaltyPrograms.model.denodb.ts';

import { LoyaltyProgramCollection } from './ERPModel/accounts/loyalty_program_collection/loyaltyProgramCollections.model.denodb.ts';

import { ModeOfPayment } from './ERPModel/accounts/mode_of_payment/modeOfPayments.model.denodb.ts';

import { ModeOfPaymentAccount } from './ERPModel/accounts/mode_of_payment_account/modeOfPaymentAccounts.model.denodb.ts';

import { MonthlyDistribution } from './ERPModel/accounts/monthly_distribution/monthlyDistributions.model.denodb.ts';

import { MonthlyDistributionPercentage } from './ERPModel/accounts/monthly_distribution_percentage/monthlyDistributionPercentages.model.denodb.ts';

import { OpeningInvoiceCreationTool } from './ERPModel/accounts/opening_invoice_creation_tool/openingInvoiceCreationTools.model.denodb.ts';

import { OpeningInvoiceCreationToolItem } from './ERPModel/accounts/opening_invoice_creation_tool_item/openingInvoiceCreationToolItems.model.denodb.ts';

import { PartyAccount } from './ERPModel/accounts/party_account/partyAccounts.model.denodb.ts';

import { PaymentEntry } from './ERPModel/accounts/payment_entry/paymentEntries.model.denodb.ts';

import { PaymentEntryDeduction } from './ERPModel/accounts/payment_entry_deduction/paymentEntryDeductions.model.denodb.ts';

import { PaymentEntryReference } from './ERPModel/accounts/payment_entry_reference/paymentEntryReferences.model.denodb.ts';

import { PaymentGatewayAccount } from './ERPModel/accounts/payment_gateway_account/paymentGatewayAccounts.model.denodb.ts';

import { PaymentOrder } from './ERPModel/accounts/payment_order/paymentOrders.model.denodb.ts';

import { PaymentOrderReference } from './ERPModel/accounts/payment_order_reference/paymentOrderReferences.model.denodb.ts';

import { PaymentReconciliation } from './ERPModel/accounts/payment_reconciliation/paymentReconciliations.model.denodb.ts';

import { PaymentReconciliationInvoice } from './ERPModel/accounts/payment_reconciliation_invoice/paymentReconciliationInvoices.model.denodb.ts';

import { PaymentReconciliationPayment } from './ERPModel/accounts/payment_reconciliation_payment/paymentReconciliationPayments.model.denodb.ts';

import { PaymentRequest } from './ERPModel/accounts/payment_request/paymentRequests.model.denodb.ts';

import { PaymentSchedule } from './ERPModel/accounts/payment_schedule/paymentSchedules.model.denodb.ts';

import { PaymentTerm } from './ERPModel/accounts/payment_term/paymentTerms.model.denodb.ts';

import { PaymentTermsTemplate } from './ERPModel/accounts/payment_terms_template/paymentTermsTemplates.model.denodb.ts';

import { PaymentTermsTemplateDetail } from './ERPModel/accounts/payment_terms_template_detail/paymentTermsTemplateDetails.model.denodb.ts';

import { PeriodClosingVoucher } from './ERPModel/accounts/period_closing_voucher/periodClosingVouchers.model.denodb.ts';

import { PosCustomerGroup } from './ERPModel/accounts/pos_customer_group/posCustomerGroups.model.denodb.ts';

import { PosItemGroup } from './ERPModel/accounts/pos_item_group/posItemGroups.model.denodb.ts';

import { PosProfile } from './ERPModel/accounts/pos_profile/posProfiles.model.denodb.ts';

import { PosProfileUser } from './ERPModel/accounts/pos_profile_user/posProfileUsers.model.denodb.ts';

import { PosSetting } from './ERPModel/accounts/pos_settings/posSettings.model.denodb.ts';

import { PricingRule } from './ERPModel/accounts/pricing_rule/pricingRules.model.denodb.ts';

import { PurchaseInvoice } from './ERPModel/accounts/purchase_invoice/purchaseInvoices.model.denodb.ts';

import { PurchaseInvoiceAdvance } from './ERPModel/accounts/purchase_invoice_advance/purchaseInvoiceAdvances.model.denodb.ts';

import { PurchaseInvoiceItem } from './ERPModel/accounts/purchase_invoice_item/purchaseInvoiceItems.model.denodb.ts';

import { PurchaseTaxesAndCharge } from './ERPModel/accounts/purchase_taxes_and_charges/purchaseTaxesAndCharges.model.denodb.ts';

import { PurchaseTaxesAndChargesTemplate } from './ERPModel/accounts/purchase_taxes_and_charges_template/purchaseTaxesAndChargesTemplates.model.denodb.ts';

import { SalaryComponentAccount } from './ERPModel/accounts/salary_component_account/salaryComponentAccounts.model.denodb.ts';

import { SalesInvoice } from './ERPModel/accounts/sales_invoice/salesInvoices.model.denodb.ts';

import { SalesInvoiceAdvance } from './ERPModel/accounts/sales_invoice_advance/salesInvoiceAdvances.model.denodb.ts';

import { SalesInvoiceItem } from './ERPModel/accounts/sales_invoice_item/salesInvoiceItems.model.denodb.ts';

import { SalesInvoicePayment } from './ERPModel/accounts/sales_invoice_payment/salesInvoicePayments.model.denodb.ts';

import { SalesInvoiceTimesheet } from './ERPModel/accounts/sales_invoice_timesheet/salesInvoiceTimesheets.model.denodb.ts';

import { SalesTaxesAndCharge } from './ERPModel/accounts/sales_taxes_and_charges/salesTaxesAndCharges.model.denodb.ts';

import { SalesTaxesAndChargesTemplate } from './ERPModel/accounts/sales_taxes_and_charges_template/salesTaxesAndChargesTemplates.model.denodb.ts';

import { Shareholder } from './ERPModel/accounts/shareholder/shareholders.model.denodb.ts';

import { ShareBalance } from './ERPModel/accounts/share_balance/shareBalances.model.denodb.ts';

import { ShareTransfer } from './ERPModel/accounts/share_transfer/shareTransfers.model.denodb.ts';

import { ShareType } from './ERPModel/accounts/share_type/shareTypes.model.denodb.ts';

import { ShippingRule } from './ERPModel/accounts/shipping_rule/shippingRules.model.denodb.ts';

import { ShippingRuleCondition } from './ERPModel/accounts/shipping_rule_condition/shippingRuleConditions.model.denodb.ts';

import { ShippingRuleCountry } from './ERPModel/accounts/shipping_rule_country/shippingRuleCountries.model.denodb.ts';

import { Subscription } from './ERPModel/accounts/subscription/subscriptions.model.denodb.ts';

import { SubscriptionInvoice } from './ERPModel/accounts/subscription_invoice/subscriptionInvoices.model.denodb.ts';

import { SubscriptionPlan } from './ERPModel/accounts/subscription_plan/subscriptionPlans.model.denodb.ts';

import { SubscriptionPlanDetail } from './ERPModel/accounts/subscription_plan_detail/subscriptionPlanDetails.model.denodb.ts';

import { SubscriptionSetting } from './ERPModel/accounts/subscription_settings/subscriptionSettings.model.denodb.ts';

import { TaxCategory } from './ERPModel/accounts/tax_category/taxCategories.model.denodb.ts';

import { TaxRule } from './ERPModel/accounts/tax_rule/taxRules.model.denodb.ts';

import { TaxWithholdingAccount } from './ERPModel/accounts/tax_withholding_account/taxWithholdingAccounts.model.denodb.ts';

import { TaxWithholdingCategory } from './ERPModel/accounts/tax_withholding_category/taxWithholdingCategories.model.denodb.ts';

import { TaxWithholdingRate } from './ERPModel/accounts/tax_withholding_rate/taxWithholdingRates.model.denodb.ts';

import { Asset } from './ERPModel/assets/asset/assets.model.denodb.ts';

import { AssetCategory } from './ERPModel/assets/asset_category/assetCategories.model.denodb.ts';

import { AssetCategoryAccount } from './ERPModel/assets/asset_category_account/assetCategoryAccounts.model.denodb.ts';

import { AssetFinanceBook } from './ERPModel/assets/asset_finance_book/assetFinanceBooks.model.denodb.ts';

import { AssetMaintenance } from './ERPModel/assets/asset_maintenance/assetMaintenances.model.denodb.ts';

import { AssetMaintenanceLog } from './ERPModel/assets/asset_maintenance_log/assetMaintenanceLogs.model.denodb.ts';

import { AssetMaintenanceTask } from './ERPModel/assets/asset_maintenance_task/assetMaintenanceTasks.model.denodb.ts';

import { AssetMaintenanceTeam } from './ERPModel/assets/asset_maintenance_team/assetMaintenanceTeams.model.denodb.ts';

import { AssetMovement } from './ERPModel/assets/asset_movement/assetMovements.model.denodb.ts';

import { AssetRepair } from './ERPModel/assets/asset_repair/assetRepairs.model.denodb.ts';

import { AssetSetting } from './ERPModel/assets/asset_settings/assetSettings.model.denodb.ts';

import { AssetValueAdjustment } from './ERPModel/assets/asset_value_adjustment/assetValueAdjustments.model.denodb.ts';

import { DepreciationSchedule } from './ERPModel/assets/depreciation_schedule/depreciationSchedules.model.denodb.ts';

import { LinkedLocation } from './ERPModel/assets/linked_location/linkedLocations.model.denodb.ts';

import { Location } from './ERPModel/assets/location/locations.model.denodb.ts';

import { MaintenanceTeamMember } from './ERPModel/assets/maintenance_team_member/maintenanceTeamMembers.model.denodb.ts';

import { AdditionalSalary } from './ERPModel/hr/additional_salary/additionalSalaries.model.denodb.ts';

import { Appraisal } from './ERPModel/hr/appraisal/appraisals.model.denodb.ts';

import { AppraisalGoal } from './ERPModel/hr/appraisal_goal/appraisalGoals.model.denodb.ts';

import { Attendance } from './ERPModel/hr/attendance/attendances.model.denodb.ts';

import { AttendanceRequest } from './ERPModel/hr/attendance_request/attendanceRequests.model.denodb.ts';

import { Branch } from './ERPModel/hr/branch/branches.model.denodb.ts';

import { CompensatoryLeaveRequest } from './ERPModel/hr/compensatory_leave_request/compensatoryLeaveRequests.model.denodb.ts';

import { DailyWorkSummary } from './ERPModel/hr/daily_work_summary/dailyWorkSummaries.model.denodb.ts';

import { DailyWorkSummaryGroup } from './ERPModel/hr/daily_work_summary_group/dailyWorkSummaryGroups.model.denodb.ts';

import { DailyWorkSummaryGroupUser } from './ERPModel/hr/daily_work_summary_group_user/dailyWorkSummaryGroupUsers.model.denodb.ts';

import { Department } from './ERPModel/hr/department/departments.model.denodb.ts';

import { DepartmentApprover } from './ERPModel/hr/department_approver/departmentApprovers.model.denodb.ts';

import { Designation } from './ERPModel/hr/designation/designations.model.denodb.ts';

import { Driver } from './ERPModel/hr/driver/drivers.model.denodb.ts';

import { DrivingLicenseCategory } from './ERPModel/hr/driving_license_category/drivingLicenseCategories.model.denodb.ts';

import { Employee } from './ERPModel/hr/employee/employees.model.denodb.ts';

import { EmployeeAdvance } from './ERPModel/hr/employee_advance/employeeAdvances.model.denodb.ts';

import { EmployeeAttendanceTool } from './ERPModel/hr/employee_attendance_tool/employeeAttendanceTools.model.denodb.ts';

import { EmployeeBenefitApplication } from './ERPModel/hr/employee_benefit_application/employeeBenefitApplications.model.denodb.ts';

import { EmployeeBenefitApplicationDetail } from './ERPModel/hr/employee_benefit_application_detail/employeeBenefitApplicationDetails.model.denodb.ts';

import { EmployeeBenefitClaim } from './ERPModel/hr/employee_benefit_claim/employeeBenefitClaims.model.denodb.ts';

import { EmployeeBoardingActivity } from './ERPModel/hr/employee_boarding_activity/employeeBoardingActivities.model.denodb.ts';

import { EmployeeEducation } from './ERPModel/hr/employee_education/employeeEducations.model.denodb.ts';

import { EmployeeExternalWorkHistory } from './ERPModel/hr/employee_external_work_history/employeeExternalWorkHistories.model.denodb.ts';

import { EmployeeGrade } from './ERPModel/hr/employee_grade/employeeGrades.model.denodb.ts';

import { EmployeeHealthInsurance } from './ERPModel/hr/employee_health_insurance/employeeHealthInsurances.model.denodb.ts';

import { EmployeeIncentive } from './ERPModel/hr/employee_incentive/employeeIncentives.model.denodb.ts';

import { EmployeeInternalWorkHistory } from './ERPModel/hr/employee_internal_work_history/employeeInternalWorkHistories.model.denodb.ts';

import { EmployeeOnboarding } from './ERPModel/hr/employee_onboarding/employeeOnboardings.model.denodb.ts';

import { EmployeeOnboardingActivity } from './ERPModel/hr/employee_onboarding_activity/employeeOnboardingActivities.model.denodb.ts';

import { EmployeeOnboardingTemplate } from './ERPModel/hr/employee_onboarding_template/employeeOnboardingTemplates.model.denodb.ts';

import { EmployeePromotion } from './ERPModel/hr/employee_promotion/employeePromotions.model.denodb.ts';

import { EmployeePropertyHistory } from './ERPModel/hr/employee_property_history/employeePropertyHistories.model.denodb.ts';

import { EmployeeSeparation } from './ERPModel/hr/employee_separation/employeeSeparations.model.denodb.ts';

import { EmployeeSeparationTemplate } from './ERPModel/hr/employee_separation_template/employeeSeparationTemplates.model.denodb.ts';

import { EmployeeTaxExemptionCategory } from './ERPModel/hr/employee_tax_exemption_category/employeeTaxExemptionCategories.model.denodb.ts';

import { EmployeeTaxExemptionDeclaration } from './ERPModel/hr/employee_tax_exemption_declaration/employeeTaxExemptionDeclarations.model.denodb.ts';

import { EmployeeTaxExemptionDeclarationCategory } from './ERPModel/hr/employee_tax_exemption_declaration_category/employeeTaxExemptionDeclarationCategories.model.denodb.ts';

import { EmployeeTaxExemptionProofSubmission } from './ERPModel/hr/employee_tax_exemption_proof_submission/employeeTaxExemptionProofSubmissions.model.denodb.ts';

import { EmployeeTaxExemptionProofSubmissionDetail } from './ERPModel/hr/employee_tax_exemption_proof_submission_detail/employeeTaxExemptionProofSubmissionDetails.model.denodb.ts';

import { EmployeeTaxExemptionSubCategory } from './ERPModel/hr/employee_tax_exemption_sub_category/employeeTaxExemptionSubCategories.model.denodb.ts';

import { EmployeeTransfer } from './ERPModel/hr/employee_transfer/employeeTransfers.model.denodb.ts';

import { EmployeeTransferProperty } from './ERPModel/hr/employee_transfer_property/employeeTransferProperties.model.denodb.ts';

import { EmploymentType } from './ERPModel/hr/employment_type/employmentTypes.model.denodb.ts';

import { ExpenseClaim } from './ERPModel/hr/expense_claim/expenseClaims.model.denodb.ts';

import { ExpenseClaimAccount } from './ERPModel/hr/expense_claim_account/expenseClaimAccounts.model.denodb.ts';

import { ExpenseClaimAdvance } from './ERPModel/hr/expense_claim_advance/expenseClaimAdvances.model.denodb.ts';

import { ExpenseClaimDetail } from './ERPModel/hr/expense_claim_detail/expenseClaimDetails.model.denodb.ts';

import { ExpenseClaimType } from './ERPModel/hr/expense_claim_type/expenseClaimTypes.model.denodb.ts';

import { Holiday } from './ERPModel/hr/holiday/holidays.model.denodb.ts';

import { HolidayList } from './ERPModel/hr/holiday_list/holidayLists.model.denodb.ts';

import { HrSetting } from './ERPModel/hr/hr_settings/hrSettings.model.denodb.ts';

import { IdentificationDocumentType } from './ERPModel/hr/identification_document_type/identificationDocumentTypes.model.denodb.ts';

import { Interest } from './ERPModel/hr/interest/interests.model.denodb.ts';

import { JobApplicant } from './ERPModel/hr/job_applicant/jobApplicants.model.denodb.ts';

import { JobApplicantSource } from './ERPModel/hr/job_applicant_source/jobApplicantSources.model.denodb.ts';

import { JobOffer } from './ERPModel/hr/job_offer/jobOffers.model.denodb.ts';

import { JobOfferTerm } from './ERPModel/hr/job_offer_term/jobOfferTerms.model.denodb.ts';

import { JobOpening } from './ERPModel/hr/job_opening/jobOpenings.model.denodb.ts';

import { LeaveAllocation } from './ERPModel/hr/leave_allocation/leaveAllocations.model.denodb.ts';

import { LeaveApplication } from './ERPModel/hr/leave_application/leaveApplications.model.denodb.ts';

import { LeaveBlockList } from './ERPModel/hr/leave_block_list/leaveBlockLists.model.denodb.ts';

import { LeaveBlockListAllow } from './ERPModel/hr/leave_block_list_allow/leaveBlockListAllows.model.denodb.ts';

import { LeaveBlockListDate } from './ERPModel/hr/leave_block_list_date/leaveBlockListDates.model.denodb.ts';

import { LeaveControlPanel } from './ERPModel/hr/leave_control_panel/leaveControlPanels.model.denodb.ts';

import { LeaveEncashment } from './ERPModel/hr/leave_encashment/leaveEncashments.model.denodb.ts';

import { LeavePeriod } from './ERPModel/hr/leave_period/leavePeriods.model.denodb.ts';

import { LeavePolicy } from './ERPModel/hr/leave_policy/leavePolicies.model.denodb.ts';

import { LeavePolicyDetail } from './ERPModel/hr/leave_policy_detail/leavePolicyDetails.model.denodb.ts';

import { LeaveType } from './ERPModel/hr/leave_type/leaveTypes.model.denodb.ts';

import { Loan } from './ERPModel/hr/loan/loans.model.denodb.ts';

import { LoanApplication } from './ERPModel/hr/loan_application/loanApplications.model.denodb.ts';

import { LoanType } from './ERPModel/hr/loan_type/loanTypes.model.denodb.ts';

import { OfferTerm } from './ERPModel/hr/offer_term/offerTerms.model.denodb.ts';

import { PayrollEmployeeDetail } from './ERPModel/hr/payroll_employee_detail/payrollEmployeeDetails.model.denodb.ts';

import { PayrollEntry } from './ERPModel/hr/payroll_entry/payrollEntries.model.denodb.ts';

import { PayrollPeriod } from './ERPModel/hr/payroll_period/payrollPeriods.model.denodb.ts';

import { PayrollPeriodDate } from './ERPModel/hr/payroll_period_date/payrollPeriodDates.model.denodb.ts';

import { PurposeOfTravel } from './ERPModel/hr/purpose_of_travel/purposeOfTravels.model.denodb.ts';

import { RepaymentSchedule } from './ERPModel/hr/repayment_schedule/repaymentSchedules.model.denodb.ts';

import { RetentionBonu } from './ERPModel/hr/retention_bonus/retentionBonuses.model.denodb.ts';

import { SalaryComponent } from './ERPModel/hr/salary_component/salaryComponents.model.denodb.ts';

import { SalaryDetail } from './ERPModel/hr/salary_detail/salaryDetails.model.denodb.ts';

import { SalarySlip } from './ERPModel/hr/salary_slip/salarySlips.model.denodb.ts';

import { SalarySlipLoan } from './ERPModel/hr/salary_slip_loan/salarySlipLoans.model.denodb.ts';

import { SalarySlipTimesheet } from './ERPModel/hr/salary_slip_timesheet/salarySlipTimesheets.model.denodb.ts';

import { SalaryStructure } from './ERPModel/hr/salary_structure/salaryStructures.model.denodb.ts';

import { SalaryStructureAssignment } from './ERPModel/hr/salary_structure_assignment/salaryStructureAssignments.model.denodb.ts';

import { ShiftAssignment } from './ERPModel/hr/shift_assignment/shiftAssignments.model.denodb.ts';

import { ShiftRequest } from './ERPModel/hr/shift_request/shiftRequests.model.denodb.ts';

import { ShiftType } from './ERPModel/hr/shift_type/shiftTypes.model.denodb.ts';

import { StaffingPlan } from './ERPModel/hr/staffing_plan/staffingPlans.model.denodb.ts';

import { StaffingPlanDetail } from './ERPModel/hr/staffing_plan_detail/staffingPlanDetails.model.denodb.ts';

import { TaxableSalarySlab } from './ERPModel/hr/taxable_salary_slab/taxableSalarySlabs.model.denodb.ts';

import { TrainingEvent } from './ERPModel/hr/training_event/trainingEvents.model.denodb.ts';

import { TrainingEventEmployee } from './ERPModel/hr/training_event_employee/trainingEventEmployees.model.denodb.ts';

import { TrainingFeedback } from './ERPModel/hr/training_feedback/trainingFeedbacks.model.denodb.ts';

import { TrainingProgram } from './ERPModel/hr/training_program/trainingPrograms.model.denodb.ts';

import { TrainingResult } from './ERPModel/hr/training_result/trainingResults.model.denodb.ts';

import { TrainingResultEmployee } from './ERPModel/hr/training_result_employee/trainingResultEmployees.model.denodb.ts';

import { TravelItinerary } from './ERPModel/hr/travel_itinerary/travelItineraries.model.denodb.ts';

import { TravelRequest } from './ERPModel/hr/travel_request/travelRequests.model.denodb.ts';

import { TravelRequestCosting } from './ERPModel/hr/travel_request_costing/travelRequestCostings.model.denodb.ts';

import { UploadAttendance } from './ERPModel/hr/upload_attendance/uploadAttendances.model.denodb.ts';

import { Vehicle } from './ERPModel/hr/vehicle/vehicles.model.denodb.ts';

import { VehicleLog } from './ERPModel/hr/vehicle_log/vehicleLogs.model.denodb.ts';

import { VehicleService } from './ERPModel/hr/vehicle_service/vehicleServices.model.denodb.ts';

import { ActivityCost } from './ERPModel/projects/activity_cost/activityCosts.model.denodb.ts';

import { ActivityType } from './ERPModel/projects/activity_type/activityTypes.model.denodb.ts';

import { DependentTask } from './ERPModel/projects/dependent_task/dependentTasks.model.denodb.ts';

import { Project } from './ERPModel/projects/project/projects.model.denodb.ts';

import { ProjectsSetting } from './ERPModel/projects/projects_settings/projectsSettings.model.denodb.ts';

import { ProjectTask } from './ERPModel/projects/project_task/projectTasks.model.denodb.ts';

import { ProjectTemplate } from './ERPModel/projects/project_template/projectTemplates.model.denodb.ts';

import { ProjectTemplateTask } from './ERPModel/projects/project_template_task/projectTemplateTasks.model.denodb.ts';

import { ProjectType } from './ERPModel/projects/project_type/projectTypes.model.denodb.ts';

import { ProjectUpdate } from './ERPModel/projects/project_update/projectUpdates.model.denodb.ts';

import { ProjectUser } from './ERPModel/projects/project_user/projectUsers.model.denodb.ts';

import { Task } from './ERPModel/projects/task/tasks.model.denodb.ts';

import { TaskDependsOn } from './ERPModel/projects/task_depends_on/taskDependsOns.model.denodb.ts';

import { Timesheet } from './ERPModel/projects/timesheet/timesheets.model.denodb.ts';

import { TimesheetDetail } from './ERPModel/projects/timesheet_detail/timesheetDetails.model.denodb.ts';


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
  CashierClosing,
  CashierClosingPayment,
  CashFlowMapper,
  CashFlowMapping,
  CashFlowMappingAccount,
  CashFlowMappingTemplate,
  CashFlowMappingTemplateDetail,
  ChequePrintTemplate,
  ClosedDocument,
  CostCenter,
  CForm,
  CFormInvoiceDetail,
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
  Shareholder,
  ShareBalance,
  ShareTransfer,
  ShareType,
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
  ProjectsSetting,
  ProjectTask,
  ProjectTemplate,
  ProjectTemplateTask,
  ProjectType,
  ProjectUpdate,
  ProjectUser,
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
  cashierClosings: CashierClosing,
  cashierClosingPayments: CashierClosingPayment,
  cashFlowMappers: CashFlowMapper,
  cashFlowMappings: CashFlowMapping,
  cashFlowMappingAccounts: CashFlowMappingAccount,
  cashFlowMappingTemplates: CashFlowMappingTemplate,
  cashFlowMappingTemplateDetails: CashFlowMappingTemplateDetail,
  chequePrintTemplates: ChequePrintTemplate,
  closedDocuments: ClosedDocument,
  costCenters: CostCenter,
  cForms: CForm,
  cFormInvoiceDetails: CFormInvoiceDetail,
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
  shareholders: Shareholder,
  shareBalances: ShareBalance,
  shareTransfers: ShareTransfer,
  shareTypes: ShareType,
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
  projectsSettings: ProjectsSetting,
  projectTasks: ProjectTask,
  projectTemplates: ProjectTemplate,
  projectTemplateTasks: ProjectTemplateTask,
  projectTypes: ProjectType,
  projectUpdates: ProjectUpdate,
  projectUsers: ProjectUser,
  tasks: Task,
  taskDependsOns: TaskDependsOn,
  timesheets: Timesheet,
  timesheetDetails: TimesheetDetail,
  
}