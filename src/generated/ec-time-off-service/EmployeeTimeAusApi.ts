/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmployeeTimeAus } from './EmployeeTimeAus';
import { EmployeeTimeAusRequestBuilder } from './EmployeeTimeAusRequestBuilder';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export class EmployeeTimeAusApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EmployeeTimeAus<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = EmployeeTimeAus;

  requestBuilder(): EmployeeTimeAusRequestBuilder<DeSerializersT> {
    return new EmployeeTimeAusRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EmployeeTimeAus<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<EmployeeTimeAus<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<EmployeeTimeAus<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof EmployeeTimeAus, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EmployeeTimeAus,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    EMPLOYEE_TIME_EXTERNAL_CODE: OrderableEdmTypeField<
      EmployeeTimeAus<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CREATED_BY: OrderableEdmTypeField<
      EmployeeTimeAus<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_DATE_TIME: OrderableEdmTypeField<
      EmployeeTimeAus<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CUST_WORKFLOW_FIELD_1: OrderableEdmTypeField<
      EmployeeTimeAus<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_WORKFLOW_FIELD_2: OrderableEdmTypeField<
      EmployeeTimeAus<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENTITY_UUID: OrderableEdmTypeField<
      EmployeeTimeAus<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_CODE: OrderableEdmTypeField<
      EmployeeTimeAus<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LAST_MODIFIED_BY: OrderableEdmTypeField<
      EmployeeTimeAus<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      EmployeeTimeAus<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MDF_SYSTEM_RECORD_STATUS: OrderableEdmTypeField<
      EmployeeTimeAus<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUEST_ADVANCE_LEAVE_PAYMENT: OrderableEdmTypeField<
      EmployeeTimeAus<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    SPLIT_PAYMENT_ACROSS_FINANCIAL_YEAR: OrderableEdmTypeField<
      EmployeeTimeAus<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    ALL_FIELDS: AllFields<EmployeeTimeAus<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link employeeTimeExternalCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_TIME_EXTERNAL_CODE: fieldBuilder.buildEdmTypeField(
          'EmployeeTime_externalCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link createdBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_BY: fieldBuilder.buildEdmTypeField(
          'createdBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link createdDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'createdDateTime',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link custWorkflowField1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_WORKFLOW_FIELD_1: fieldBuilder.buildEdmTypeField(
          'cust_WorkflowField1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custWorkflowField2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_WORKFLOW_FIELD_2: fieldBuilder.buildEdmTypeField(
          'cust_WorkflowField2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link entityUuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTITY_UUID: fieldBuilder.buildEdmTypeField(
          'entityUUID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_CODE: fieldBuilder.buildEdmTypeField(
          'externalCode',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link lastModifiedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_MODIFIED_BY: fieldBuilder.buildEdmTypeField(
          'lastModifiedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastModifiedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'lastModifiedDateTime',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link mdfSystemRecordStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MDF_SYSTEM_RECORD_STATUS: fieldBuilder.buildEdmTypeField(
          'mdfSystemRecordStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requestAdvanceLeavePayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_ADVANCE_LEAVE_PAYMENT: fieldBuilder.buildEdmTypeField(
          'requestAdvanceLeavePayment',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link splitPaymentAcrossFinancialYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPLIT_PAYMENT_ACROSS_FINANCIAL_YEAR: fieldBuilder.buildEdmTypeField(
          'splitPaymentAcrossFinancialYear',
          'Edm.Boolean',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EmployeeTimeAus)
      };
    }

    return this._schema;
  }
}
