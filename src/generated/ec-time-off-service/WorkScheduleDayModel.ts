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
import type { WorkScheduleDayModelApi } from './WorkScheduleDayModelApi';
import {
  WorkScheduleDayModelSegment,
  WorkScheduleDayModelSegmentType
} from './WorkScheduleDayModelSegment';
import {
  ShiftClassification,
  ShiftClassificationType
} from './ShiftClassification';
import {
  WorkScheduleDayModelVariantAssignment,
  WorkScheduleDayModelVariantAssignmentType
} from './WorkScheduleDayModelVariantAssignment';

/**
 * This class represents the entity "WorkScheduleDayModel" of service "ECTimeOff".
 */
export class WorkScheduleDayModel<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WorkScheduleDayModelType<T>
{
  /**
   * Technical entity name for WorkScheduleDayModel.
   */
  static _entityName = 'WorkScheduleDayModel';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * All key fields of the WorkScheduleDayModel entity
   */
  static _keys = ['externalCode'];
  /**
   * Country/Region.
   * Maximum length: 128.
   * @nullable
   */
  country?: DeserializedType<T, 'Edm.String'> | null;
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
  createdDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * createdDate.
   * @nullable
   */
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Cross Midnight Allowed.
   * @nullable
   */
  crossMidnightAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Entity UUID.
   * Maximum length: 255.
   * @nullable
   */
  entityUuid?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Code.
   * Maximum length: 128.
   */
  externalCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameArSa?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameCyGb?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameDeDe?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameDefaultValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnDebug?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnDebugApos?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnDebugAposRtl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnGb?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnRtl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnUs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEsEs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEsMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameFrCa?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameFrFr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameHiIn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameIwIl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameJaJp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameKoKr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameLocalized?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameNlNl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNamePtBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameThTh?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameZhCn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Planned Hours And Minutes (hh:mm).
   * Maximum length: 255.
   * @nullable
   */
  hoursAndMinutes?: DeserializedType<T, 'Edm.String'> | null;
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
  lastModifiedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * lastModifiedDate.
   * @nullable
   */
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * lastModifiedDate.
   * @nullable
   */
  lastModifiedDateWithTz?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Effective End Date.
   * @nullable
   */
  mdfSystemEffectiveEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Effective Start Date.
   * @nullable
   */
  mdfSystemEffectiveStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Entity ID.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemEntityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Object Type.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemObjectType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Record ID.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Record Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Sequence Number.
   * @nullable
   */
  mdfSystemTransactionSequence?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Version ID.
   * @nullable
   */
  mdfSystemVersionId?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Non-Working Day.
   * @nullable
   */
  nonWorkingDay?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Rounding.
   * Maximum length: 128.
   * @nullable
   */
  roundingBasedOnWorkScheduleInformation?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Shift Classification.
   * Maximum length: 128.
   * @nullable
   */
  shiftClassification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Recording Variant.
   * Maximum length: 255.
   * @nullable
   */
  timeRecordingVariant?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Day Model Usage.
   * Maximum length: 128.
   * @nullable
   */
  variantUsage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Planned Hours (Decimal).
   * @nullable
   */
  workingHours?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * One-to-many navigation property to the {@link WorkScheduleDayModelSegment} entity.
   */
  segments!: WorkScheduleDayModelSegment<T>[];
  /**
   * One-to-one navigation property to the {@link ShiftClassification} entity.
   */
  shiftClassificationNav?: ShiftClassification<T> | null;
  /**
   * One-to-many navigation property to the {@link WorkScheduleDayModelVariantAssignment} entity.
   */
  variants!: WorkScheduleDayModelVariantAssignment<T>[];

  constructor(readonly _entityApi: WorkScheduleDayModelApi<T>) {
    super(_entityApi);
  }
}

export interface WorkScheduleDayModelType<
  T extends DeSerializers = DefaultDeSerializers
> {
  country?: DeserializedType<T, 'Edm.String'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  crossMidnightAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  entityUuid?: DeserializedType<T, 'Edm.String'> | null;
  externalCode: DeserializedType<T, 'Edm.String'>;
  externalNameArSa?: DeserializedType<T, 'Edm.String'> | null;
  externalNameCyGb?: DeserializedType<T, 'Edm.String'> | null;
  externalNameDeDe?: DeserializedType<T, 'Edm.String'> | null;
  externalNameDefaultValue?: DeserializedType<T, 'Edm.String'> | null;
  externalNameEnDebug?: DeserializedType<T, 'Edm.String'> | null;
  externalNameEnDebugApos?: DeserializedType<T, 'Edm.String'> | null;
  externalNameEnDebugAposRtl?: DeserializedType<T, 'Edm.String'> | null;
  externalNameEnGb?: DeserializedType<T, 'Edm.String'> | null;
  externalNameEnRtl?: DeserializedType<T, 'Edm.String'> | null;
  externalNameEnUs?: DeserializedType<T, 'Edm.String'> | null;
  externalNameEsEs?: DeserializedType<T, 'Edm.String'> | null;
  externalNameEsMx?: DeserializedType<T, 'Edm.String'> | null;
  externalNameFrCa?: DeserializedType<T, 'Edm.String'> | null;
  externalNameFrFr?: DeserializedType<T, 'Edm.String'> | null;
  externalNameHiIn?: DeserializedType<T, 'Edm.String'> | null;
  externalNameIwIl?: DeserializedType<T, 'Edm.String'> | null;
  externalNameJaJp?: DeserializedType<T, 'Edm.String'> | null;
  externalNameKoKr?: DeserializedType<T, 'Edm.String'> | null;
  externalNameLocalized?: DeserializedType<T, 'Edm.String'> | null;
  externalNameNlNl?: DeserializedType<T, 'Edm.String'> | null;
  externalNamePtBr?: DeserializedType<T, 'Edm.String'> | null;
  externalNameThTh?: DeserializedType<T, 'Edm.String'> | null;
  externalNameZhCn?: DeserializedType<T, 'Edm.String'> | null;
  hoursAndMinutes?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastModifiedDateWithTz?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  mdfSystemEffectiveEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  mdfSystemEffectiveStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  mdfSystemEntityId?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemObjectType?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemRecordId?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemStatus?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemTransactionSequence?: DeserializedType<T, 'Edm.Int64'> | null;
  mdfSystemVersionId?: DeserializedType<T, 'Edm.Int64'> | null;
  nonWorkingDay?: DeserializedType<T, 'Edm.Boolean'> | null;
  roundingBasedOnWorkScheduleInformation?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  shiftClassification?: DeserializedType<T, 'Edm.String'> | null;
  timeRecordingVariant?: DeserializedType<T, 'Edm.String'> | null;
  variantUsage?: DeserializedType<T, 'Edm.String'> | null;
  workingHours?: DeserializedType<T, 'Edm.Decimal'> | null;
  segments: WorkScheduleDayModelSegmentType<T>[];
  shiftClassificationNav?: ShiftClassificationType<T> | null;
  variants: WorkScheduleDayModelVariantAssignmentType<T>[];
}
