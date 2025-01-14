/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import type { TimeTypeAusApi } from './TimeTypeAusApi';

/**
 * This class represents the entity "TimeTypeAUS" of service "ECTimeOff".
 */
export class TimeTypeAus<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TimeTypeAusType<T>
{
  /**
   * Technical entity name for TimeTypeAus.
   */
  static _entityName = 'TimeTypeAUS';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * All key fields of the TimeTypeAus entity
   */
  static _keys = ['TimeType_externalCode', 'externalCode'];
  /**
   * Time Type_External Code.
   * Maximum length: 128.
   */
  timeTypeExternalCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * Advance Leave Payment Allowed.
   * @nullable
   */
  advanceLeavePaymentAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * createdBy.
   * Maximum length: 255.
   * @nullable
   */
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * createdDate.
   * @nullable
   */
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Entity UUID.
   * Maximum length: 255.
   * @nullable
   */
  entityUuid?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * externalCode.
   * Maximum length: 38.
   */
  externalCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * lastModifiedBy.
   * Maximum length: 255.
   * @nullable
   */
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * lastModifiedDate.
   * @nullable
   */
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Record Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Split Across Financial Year Allowed.
   * @nullable
   */
  splitPaymentAcrossFinancialYearAllowed?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;

  constructor(readonly _entityApi: TimeTypeAusApi<T>) {
    super(_entityApi);
  }
}

export interface TimeTypeAusType<
  T extends DeSerializers = DefaultDeSerializers
> {
  timeTypeExternalCode: DeserializedType<T, 'Edm.String'>;
  advanceLeavePaymentAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  entityUuid?: DeserializedType<T, 'Edm.String'> | null;
  externalCode: DeserializedType<T, 'Edm.String'>;
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  splitPaymentAcrossFinancialYearAllowed?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;
}
