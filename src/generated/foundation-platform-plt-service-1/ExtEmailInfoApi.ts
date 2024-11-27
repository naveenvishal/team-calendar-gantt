/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExtEmailInfo } from './ExtEmailInfo';
import { ExtEmailInfoRequestBuilder } from './ExtEmailInfoRequestBuilder';
import { PicklistOptionApi } from './PicklistOptionApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class ExtEmailInfoApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ExtEmailInfo<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link emailTypeNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMAIL_TYPE_NAV: OneToOneLink<
      ExtEmailInfo<DeSerializersT>,
      DeSerializersT,
      PicklistOptionApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [PicklistOptionApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      EMAIL_TYPE_NAV: new OneToOneLink('emailTypeNav', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = ExtEmailInfo;

  requestBuilder(): ExtEmailInfoRequestBuilder<DeSerializersT> {
    return new ExtEmailInfoRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExtEmailInfo<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ExtEmailInfo<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ExtEmailInfo<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ExtEmailInfo, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ExtEmailInfo, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    EMAIL_ADDRESS: OrderableEdmTypeField<
      ExtEmailInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EMAIL_INFO_ID: OrderableEdmTypeField<
      ExtEmailInfo<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    EMAIL_TYPE: OrderableEdmTypeField<
      ExtEmailInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_PRIMARY: OrderableEdmTypeField<
      ExtEmailInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      ExtEmailInfo<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link emailTypeNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMAIL_TYPE_NAV: OneToOneLink<
      ExtEmailInfo<DeSerializersT>,
      DeSerializersT,
      PicklistOptionApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ExtEmailInfo<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link emailAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'emailAddress',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link emailInfoId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL_INFO_ID: fieldBuilder.buildEdmTypeField(
          'emailInfoId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link emailType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL_TYPE: fieldBuilder.buildEdmTypeField(
          'emailType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isPrimary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRIMARY: fieldBuilder.buildEdmTypeField(
          'isPrimary',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExtEmailInfo)
      };
    }

    return this._schema;
  }
}
