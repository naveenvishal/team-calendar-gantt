/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  DefaultDeSerializers,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  DeserializedType,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { HolidayCategory } from './HolidayCategory';

/**
 * Request builder class for operations supported on the {@link HolidayCategory} entity.
 */
export class HolidayCategoryRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<HolidayCategory<T>, T> {
  /**
   * Returns a request builder for retrieving one `HolidayCategory` entity based on its keys.
   * @param externalCode Key property. See {@link HolidayCategory.externalCode}.
   * @returns A request builder for creating requests to retrieve one `HolidayCategory` entity based on its keys.
   */
  getByKey(
    externalCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<HolidayCategory<T>, T> {
    return new GetByKeyRequestBuilder<HolidayCategory<T>, T>(this.entityApi, {
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `HolidayCategory` entities.
   * @returns A request builder for creating requests to retrieve all `HolidayCategory` entities.
   */
  getAll(): GetAllRequestBuilder<HolidayCategory<T>, T> {
    return new GetAllRequestBuilder<HolidayCategory<T>, T>(this.entityApi);
  }
}
