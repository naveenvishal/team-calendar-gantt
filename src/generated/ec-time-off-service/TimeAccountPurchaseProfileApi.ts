/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeAccountPurchaseProfile } from './TimeAccountPurchaseProfile';
import { TimeAccountPurchaseProfileRequestBuilder } from './TimeAccountPurchaseProfileRequestBuilder';
import { TimeAccountPurchaseProfilePayComponentAssignmentApi } from './TimeAccountPurchaseProfilePayComponentAssignmentApi';
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
  OrderableEdmTypeField,
  Link
} from '@sap-cloud-sdk/odata-v2';
export class TimeAccountPurchaseProfileApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<TimeAccountPurchaseProfile<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link deductionPayComponents} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEDUCTION_PAY_COMPONENTS: Link<
      TimeAccountPurchaseProfile<DeSerializersT>,
      DeSerializersT,
      TimeAccountPurchaseProfilePayComponentAssignmentApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      TimeAccountPurchaseProfilePayComponentAssignmentApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DEDUCTION_PAY_COMPONENTS: new Link(
        'deductionPayComponents',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = TimeAccountPurchaseProfile;

  requestBuilder(): TimeAccountPurchaseProfileRequestBuilder<DeSerializersT> {
    return new TimeAccountPurchaseProfileRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TimeAccountPurchaseProfile<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TimeAccountPurchaseProfile<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TimeAccountPurchaseProfile<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof TimeAccountPurchaseProfile,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TimeAccountPurchaseProfile,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ALLOW_DEDUCTION_START_DATE_SELECTION: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    COUNTRY: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_BY: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_DATE_TIME: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    DEDUCTION_SCHEDULE: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEDUCTION_TYPE: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENTITY_UUID: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EQUIVALENT_UNITS: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_CODE: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXTERNAL_NAME_AR_SA: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_CY_GB: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_DE_DE: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_DEFAULT_VALUE: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_EN_DEBUG: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_EN_DEBUG_APOS: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_EN_DEBUG_APOS_RTL: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_EN_GB: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_EN_RTL: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_EN_US: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_ES_ES: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_ES_MX: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_FR_CA: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_FR_FR: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_HI_IN: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_IW_IL: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_JA_JP: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_KO_KR: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_LOCALIZED: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_NL_NL: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_PT_BR: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_TH_TH: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_ZH_CN: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HELP_TEXT_AR_SA: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HELP_TEXT_CY_GB: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HELP_TEXT_DE_DE: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HELP_TEXT_DEFAULT_VALUE: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HELP_TEXT_EN_DEBUG: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HELP_TEXT_EN_DEBUG_APOS: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HELP_TEXT_EN_DEBUG_APOS_RTL: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HELP_TEXT_EN_GB: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HELP_TEXT_EN_RTL: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HELP_TEXT_EN_US: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HELP_TEXT_ES_ES: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HELP_TEXT_ES_MX: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HELP_TEXT_FR_CA: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HELP_TEXT_FR_FR: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HELP_TEXT_HI_IN: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HELP_TEXT_IW_IL: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HELP_TEXT_JA_JP: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HELP_TEXT_KO_KR: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HELP_TEXT_LOCALIZED: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HELP_TEXT_NL_NL: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HELP_TEXT_PT_BR: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HELP_TEXT_TH_TH: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HELP_TEXT_ZH_CN: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_MODIFIED_BY: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MDF_SYSTEM_RECORD_STATUS: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKFLOW_CONFIGURATION: OrderableEdmTypeField<
      TimeAccountPurchaseProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link deductionPayComponents} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEDUCTION_PAY_COMPONENTS: Link<
      TimeAccountPurchaseProfile<DeSerializersT>,
      DeSerializersT,
      TimeAccountPurchaseProfilePayComponentAssignmentApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TimeAccountPurchaseProfile<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link allowDeductionStartDateSelection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_DEDUCTION_START_DATE_SELECTION: fieldBuilder.buildEdmTypeField(
          'allowDeductionStartDateSelection',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link country} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY: fieldBuilder.buildEdmTypeField('country', 'Edm.String', true),
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
         * Static representation of the {@link deductionSchedule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUCTION_SCHEDULE: fieldBuilder.buildEdmTypeField(
          'deductionSchedule',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deductionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUCTION_TYPE: fieldBuilder.buildEdmTypeField(
          'deductionType',
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
         * Static representation of the {@link equivalentUnits} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EQUIVALENT_UNITS: fieldBuilder.buildEdmTypeField(
          'equivalentUnits',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_CODE: fieldBuilder.buildEdmTypeField(
          'externalCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link externalNameArSa} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_AR_SA: fieldBuilder.buildEdmTypeField(
          'externalName_ar_SA',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameCyGb} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_CY_GB: fieldBuilder.buildEdmTypeField(
          'externalName_cy_GB',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameDeDe} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_DE_DE: fieldBuilder.buildEdmTypeField(
          'externalName_de_DE',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameDefaultValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_DEFAULT_VALUE: fieldBuilder.buildEdmTypeField(
          'externalName_defaultValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameEnDebug} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_EN_DEBUG: fieldBuilder.buildEdmTypeField(
          'externalName_en_DEBUG',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameEnDebugApos} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_EN_DEBUG_APOS: fieldBuilder.buildEdmTypeField(
          'externalName_en_DEBUG_APOS',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameEnDebugAposRtl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_EN_DEBUG_APOS_RTL: fieldBuilder.buildEdmTypeField(
          'externalName_en_DEBUG_APOS_RTL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameEnGb} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_EN_GB: fieldBuilder.buildEdmTypeField(
          'externalName_en_GB',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameEnRtl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_EN_RTL: fieldBuilder.buildEdmTypeField(
          'externalName_en_RTL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameEnUs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_EN_US: fieldBuilder.buildEdmTypeField(
          'externalName_en_US',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameEsEs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_ES_ES: fieldBuilder.buildEdmTypeField(
          'externalName_es_ES',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameEsMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_ES_MX: fieldBuilder.buildEdmTypeField(
          'externalName_es_MX',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameFrCa} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_FR_CA: fieldBuilder.buildEdmTypeField(
          'externalName_fr_CA',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameFrFr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_FR_FR: fieldBuilder.buildEdmTypeField(
          'externalName_fr_FR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameHiIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_HI_IN: fieldBuilder.buildEdmTypeField(
          'externalName_hi_IN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameIwIl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_IW_IL: fieldBuilder.buildEdmTypeField(
          'externalName_iw_IL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameJaJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_JA_JP: fieldBuilder.buildEdmTypeField(
          'externalName_ja_JP',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameKoKr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_KO_KR: fieldBuilder.buildEdmTypeField(
          'externalName_ko_KR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameLocalized} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_LOCALIZED: fieldBuilder.buildEdmTypeField(
          'externalName_localized',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameNlNl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_NL_NL: fieldBuilder.buildEdmTypeField(
          'externalName_nl_NL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNamePtBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_PT_BR: fieldBuilder.buildEdmTypeField(
          'externalName_pt_BR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameThTh} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_TH_TH: fieldBuilder.buildEdmTypeField(
          'externalName_th_TH',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameZhCn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_ZH_CN: fieldBuilder.buildEdmTypeField(
          'externalName_zh_CN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link helpTextArSa} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HELP_TEXT_AR_SA: fieldBuilder.buildEdmTypeField(
          'helpText_ar_SA',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link helpTextCyGb} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HELP_TEXT_CY_GB: fieldBuilder.buildEdmTypeField(
          'helpText_cy_GB',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link helpTextDeDe} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HELP_TEXT_DE_DE: fieldBuilder.buildEdmTypeField(
          'helpText_de_DE',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link helpTextDefaultValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HELP_TEXT_DEFAULT_VALUE: fieldBuilder.buildEdmTypeField(
          'helpText_defaultValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link helpTextEnDebug} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HELP_TEXT_EN_DEBUG: fieldBuilder.buildEdmTypeField(
          'helpText_en_DEBUG',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link helpTextEnDebugApos} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HELP_TEXT_EN_DEBUG_APOS: fieldBuilder.buildEdmTypeField(
          'helpText_en_DEBUG_APOS',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link helpTextEnDebugAposRtl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HELP_TEXT_EN_DEBUG_APOS_RTL: fieldBuilder.buildEdmTypeField(
          'helpText_en_DEBUG_APOS_RTL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link helpTextEnGb} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HELP_TEXT_EN_GB: fieldBuilder.buildEdmTypeField(
          'helpText_en_GB',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link helpTextEnRtl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HELP_TEXT_EN_RTL: fieldBuilder.buildEdmTypeField(
          'helpText_en_RTL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link helpTextEnUs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HELP_TEXT_EN_US: fieldBuilder.buildEdmTypeField(
          'helpText_en_US',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link helpTextEsEs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HELP_TEXT_ES_ES: fieldBuilder.buildEdmTypeField(
          'helpText_es_ES',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link helpTextEsMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HELP_TEXT_ES_MX: fieldBuilder.buildEdmTypeField(
          'helpText_es_MX',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link helpTextFrCa} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HELP_TEXT_FR_CA: fieldBuilder.buildEdmTypeField(
          'helpText_fr_CA',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link helpTextFrFr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HELP_TEXT_FR_FR: fieldBuilder.buildEdmTypeField(
          'helpText_fr_FR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link helpTextHiIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HELP_TEXT_HI_IN: fieldBuilder.buildEdmTypeField(
          'helpText_hi_IN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link helpTextIwIl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HELP_TEXT_IW_IL: fieldBuilder.buildEdmTypeField(
          'helpText_iw_IL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link helpTextJaJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HELP_TEXT_JA_JP: fieldBuilder.buildEdmTypeField(
          'helpText_ja_JP',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link helpTextKoKr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HELP_TEXT_KO_KR: fieldBuilder.buildEdmTypeField(
          'helpText_ko_KR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link helpTextLocalized} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HELP_TEXT_LOCALIZED: fieldBuilder.buildEdmTypeField(
          'helpText_localized',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link helpTextNlNl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HELP_TEXT_NL_NL: fieldBuilder.buildEdmTypeField(
          'helpText_nl_NL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link helpTextPtBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HELP_TEXT_PT_BR: fieldBuilder.buildEdmTypeField(
          'helpText_pt_BR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link helpTextThTh} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HELP_TEXT_TH_TH: fieldBuilder.buildEdmTypeField(
          'helpText_th_TH',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link helpTextZhCn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HELP_TEXT_ZH_CN: fieldBuilder.buildEdmTypeField(
          'helpText_zh_CN',
          'Edm.String',
          true
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
         * Static representation of the {@link workflowConfiguration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_CONFIGURATION: fieldBuilder.buildEdmTypeField(
          'workflowConfiguration',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TimeAccountPurchaseProfile)
      };
    }

    return this._schema;
  }
}
